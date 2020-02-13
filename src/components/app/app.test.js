import renderer from 'react-test-renderer';
import React from 'react';
import App from "./app";
import {mockCards} from "../../utils/tests-utils";

it(`App successfully rendered`, () => {

  const tree = renderer.create(<App cards ={mockCards} onCardHover = {() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
