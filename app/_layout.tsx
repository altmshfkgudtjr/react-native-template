import 'react-native-reanimated';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// provider
import Providers from 'providers';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  useEffect(() => {
    // 스플래시 화면을 제거하기 위한 우선 로직

    SplashScreen.hideAsync();
  }, []);

  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Providers>
  );
};

export default RootLayout;
