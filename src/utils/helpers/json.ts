/**
 * 안전한 JSON 파싱 함수
 */
export const safeParseJSON = <T = Object>(json: string) => {
  try {
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
};
