import * as React from "react";
import renderer from "react-test-renderer";

import { ThemedText } from "../ThemedText";

it(`정상적으로 렌더링이 되었는가?`, () => {
  const tree = renderer
    .create(<ThemedText>스냅샷 테스트!</ThemedText>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
