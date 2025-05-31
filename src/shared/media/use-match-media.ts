// @ts-nocheck

import { useCustomMediaDeviceWidth } from "./custom-media-device-ctx";
import { useEffect, useState, useMemo, useContext, createContext } from "react";
import { customMatchMedia } from "./custom-match-media";
import { media } from "./media";

type Between = {
  "xss-xs": string;
  "xss-sm": string;
  "xss-md": string;
  "xss-lg": string;
  "xs-sm": string;
  "xs-md": string;
  "xs-lg": string;
  "sm-md": string;
  "sm-lg": string;
  "md-lg": string;
};

const between = (): Between => {
  const arr = ["xss", "xs", "sm", "md", "lg"];
  const medias = {};
  arr.forEach((x, ix) => {
    arr.forEach((y, iy) => {
      if (ix > iy) {
        medias[
          `${y}-${x}`
        ] = `(min-width: ${media.size[y]}px) and (max-width: ${media.size[x]}px)`;
      }
    });
  });
  return medias as Between;
};

export type MediaQueries = {
  less: {
    xxs: string;
    xss: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  greater: {
    xxs: string;
    xss: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  between: Between;
};
const mediaQueries: MediaQueries = {
  less: {
    xxs: `(max-width: ${media.size.xxs}px)`,
    xss: `(max-width: ${media.size.xss}px)`,
    xs: `(max-width: ${media.size.xs}px)`,
    sm: `(max-width: ${media.size.sm}px)`,
    md: `(max-width: ${media.size.md}px)`,
    lg: `(max-width: ${media.size.lg}px)`,
  },
  greater: {
    xxs: `(min-width: ${media.size.xxs}px)`,
    xss: `(min-width: ${media.size.xss}px)`,
    xs: `(min-width: ${media.size.xs}px)`,
    sm: `(min-width: ${media.size.sm}px)`,
    md: `(min-width: ${media.size.md}px)`,
    lg: `(min-width: ${media.size.lg}px)`,
  },
  between: between(),
};

export const MatchMediaContext = createContext({ isMobile: false });

export const useMatchMedia = (
  query: string | ((queries: MediaQueries) => string)
) => {
  const { isMobile } = useContext(MatchMediaContext);

  const customWidth = useCustomMediaDeviceWidth();

  if (isMobile) {
    return true;
  }

  const mediaQuery = useMemo(
    () => (typeof query === "function" ? query(mediaQueries) : query),
    [query]
  );

  const mediaQueryList = useMemo(
    () => window.matchMedia(mediaQuery),
    [mediaQuery]
  );
  const [match, setMatch] = useState(mediaQueryList.matches);

  const [customMatch, setCustomMatch] = useState(
    customMatchMedia({ mediaQuery, deviceWidth: customWidth })
  );

  const handleMatchChange = (ev) => {
    setMatch(ev.matches);
  };

  useEffect(() => {
    if (customWidth == null) return;
    setCustomMatch(customMatchMedia({ mediaQuery, deviceWidth: customWidth }));
  }, [mediaQuery, customWidth]);

  useEffect(() => {
    mediaQueryList.addListener(handleMatchChange);
    return () => {
      mediaQueryList.removeListener(handleMatchChange);
    };
  }, []);

  return customWidth == null ? match : customMatch;
};
