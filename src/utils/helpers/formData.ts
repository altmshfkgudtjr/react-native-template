/**
 * Object 객체를 FormData으로 변환해주는 객체
 *
 * @example
 * const data = createFormData({
 *   message: 'hello, world!'
 * });
 *
 * conat data = createFormData<{ message: string }>({
 *   message: 'hello, world!'
 * });
 */
export const createFormData = <T extends FormDataObject>(obj: T) => {
  const formdata = new FormData();
  Object.keys(obj).forEach((key) =>
    Array.isArray(obj[key])
      ? obj[key].forEach((value) => formdata.append(key, value))
      : formdata.append(key, obj[key]),
  );
  return formdata;
};

interface FormDataObject {
  [key: string]: any;
}
