import "jest-styled-components";

import React from "react";

import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import {
  LinkButton,
  Button,
  TinyButtonStyles,
  TinyButton,
  ButtonStrip,
  Item
} from "./";
import { Loader } from "./Loader";
import { TEST_THEME } from "./constants";

test("Render LinkButton without crashing, matches snapshot", () => {
  const element = shallow(<LinkButton theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});
test("Render `branded` LinkButton without crashing, matches snapshot", () => {
  const element = shallow(<LinkButton branded theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});
test("Render `inverse` LinkButton without crashing, matches snapshot", () => {
  const element = shallow(<LinkButton inverse theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});
test("Render `responsiveMobileOnly` LinkButton without crashing, matches snapshot", () => {
  const element = shallow(
    <LinkButton responsiveMobileOnly theme={TEST_THEME} />
  );
  expect(element).toMatchSnapshot();
});

test("Render Button without crashing, matches snapshot", () => {
  const element = shallow(<Button theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});
test("Render `inverse` Button without crashing, matches snapshot", () => {
  const element = shallow(<Button inverse theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});
test("Render `branded` Button without crashing, matches snapshot", () => {
  const element = shallow(<Button branded theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});
test("Render `responsiveMobileOnly` Button without crashing, matches snapshot", () => {
  const element = shallow(<Button responsiveMobileOnly theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});

test("Render Button with loader without crashing, matches snapshot", () => {
  const element = shallow(
    <Button loaderComponent={Loader} theme={TEST_THEME} />
  );
  expect(element).toMatchSnapshot();
});

test("Render TinyButtonStyles without crashing, matches snapshot", () => {
  const element = shallow(<TinyButtonStyles theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});
test("Render `responsiveMobileOnly` TinyButtonStyles without crashing, matches snapshot", () => {
  const element = shallow(<TinyButtonStyles responsiveMobileOnly theme={TEST_THEME} />);
  expect(element).toMatchSnapshot()
});

test("Render TinyButton without crashing, matches snapshot", () => {
  const element = shallow(<TinyButton theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});

test("Render ButtonStrip without crashing, matches snapshot", () => {
  const element = shallow(<ButtonStrip theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});

test("Render Item without crashing, matches snapshot", () => {
  const element = shallow(<Item theme={TEST_THEME} />);
  expect(element).toMatchSnapshot();
});
