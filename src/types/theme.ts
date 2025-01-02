/**
 * 테마 종류
 */
export type ThemeType = 'light' | 'dark';

/**
 * 테마별 색상표
 */
export type Theme = {
  white: string;
  black: string;

  shade000: string;
  shade100: string;
  shade200: string;
  shade300: string;
  shade400: string;
  shade500: string;
  shade600: string;
  shade700: string;
  shade800: string;
  shade900: string;

  opacity54: string;
  opacity24: string;
  opacity05: string;
  opacity02: string;

  primaryFont: string;
  primary100: string;
  primary87: string;
  primary54: string;
  primary36: string;
  primary24: string;
  primary12: string;

  secondaryFont: string;
  secondary100: string;
  secondary54: string;
  secondary36: string;
  secondary24: string;
  secondary12: string;

  accentFont: string;
  accent100: string;
  accent54: string;
  accent36: string;
  accent24: string;
  accent12: string;

  warningFont: string;
  warning100: string;
  warning24: string;
  warning12: string;

  errorFont: string;
  error100: string;
  error24: string;
  error12: string;

  successFont: string;
  success100: string;
  success24: string;
  success12: string;

  infoFont: string;
  info100: string;
  info24: string;
  info12: string;
};
