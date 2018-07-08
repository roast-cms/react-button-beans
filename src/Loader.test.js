import "jest-styled-components";

import React from "react";

import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { Loader } from "./Loader";
import { TEST_THEME } from './constants';

test("Render button loader without crashing", () => {
  shallow(<Loader />);
});

test('Button loader matches snapshot', () => {
  const tree = renderer.create(<Loader theme={TEST_THEME} />).toJSON()
  expect(tree).toMatchSnapshot()
})
