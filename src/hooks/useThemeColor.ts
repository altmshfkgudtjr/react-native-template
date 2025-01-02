/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import theme from 'constants/theme';
import { useColorScheme } from 'hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof theme.light & keyof typeof theme.dark,
) {
  const themeType = useColorScheme() ?? 'light';
  const colorFromProps = props[themeType];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return theme[themeType][colorName];
  }
}
