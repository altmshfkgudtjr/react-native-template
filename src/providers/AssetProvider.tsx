import { useFonts } from 'expo-font';

/**
 * 초기 Asset 설정 Provider
 */
const AssetProvider = () => {
  const [loadesFonts] = useFonts({ Pretendard: require('assets/fonts/Pretendard.ttf') });

  return null;
};

export default AssetProvider;
