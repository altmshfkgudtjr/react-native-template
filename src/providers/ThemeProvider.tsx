import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
// constant
import theme from 'constants/theme';
// type
import type { PropsWithChildren } from 'react';
import type { ThemeType } from 'types/theme';

/**
 * 앱 테마 Provider
 */
const ThemeProvider = ({ children }: PropsWithChildren) => {
  const DEFAULT_THEME_TYPE: ThemeType = 'dark';

  const themeType = useColorScheme() ?? DEFAULT_THEME_TYPE;

  return (
    <>
      <StatusBar style="auto" />

      <StyledThemeProvider theme={theme[themeType]}>
        <BackgroundColor>{children}</BackgroundColor>
      </StyledThemeProvider>
    </>
  );
};

const BackgroundColor = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.shade000};
`;

export default ThemeProvider;
