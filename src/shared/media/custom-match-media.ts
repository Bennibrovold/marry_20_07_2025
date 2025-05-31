// @ts-nocheck

export const customMatchMedia = ({
  mediaQuery,
  deviceWidth,
}: {
  mediaQuery: string;
  deviceWidth: number;
}) => {
  const min = mediaQuery.match(/min-width: (\d*\.?(\d*)?)/)?.[1];
  const max = mediaQuery.match(/max-width: (\d*\.?(\d*)?)/)?.[1];

  if (min == null && max == null) {
    return false;
  }

  const maxNumber = max != null ? Number(max) : null;
  const minNumber = min != null ? Number(min) : null;

  if (min && max) {
    if (isNaN(maxNumber) || isNaN(minNumber)) return false;
    return deviceWidth > minNumber && deviceWidth < maxNumber;
  }

  if (min) {
    if (isNaN(minNumber)) return false;
    return deviceWidth > minNumber;
  }

  if (max) {
    if (isNaN(maxNumber)) return false;
    return deviceWidth < maxNumber;
  }
  return false;
};
