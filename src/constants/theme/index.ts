// constant
import lightTheme from './light';
import darkTheme from './dark';
// type
import type { ThemeType, Theme } from 'types/theme';

const theme: Record<ThemeType, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
