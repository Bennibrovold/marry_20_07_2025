import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";

import { createFastContext } from "./create-fast-context";

const CustomMediaDeviceCtx = createFastContext<{
  mediaDeviceWidth?: number | null;
}>({});

export const useCustomMediaDeviceWidth = () => {
  const customMediaDevice = CustomMediaDeviceCtx.useCtx();
  return useMemo(
    () => customMediaDevice?.mediaDeviceWidth || null,
    [customMediaDevice]
  );
};

export const CustomMediaDeviceProvider: React.FC<{
  mediaDeviceWidth: number;
}> = ({ mediaDeviceWidth, children }: any) => {
  return React.createElement(
    CustomMediaDeviceCtx.Provider,
    { value: { mediaDeviceWidth } },
    React.createElement(
      ThemeProvider,
      { theme: { mediaDeviceWidth } },
      children
    )
  );
};
