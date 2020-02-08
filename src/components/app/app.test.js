import renderer from 'react-test-renderer';
import React from 'react';
import App from "./app";
import {mockTestData} from "../../utils/tests-utils";

it(`App successfully rendered`, () => {

  const tree = renderer.create(<App {...mockTestData}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
