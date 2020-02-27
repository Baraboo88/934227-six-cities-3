import Enzyme, {mount} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import OffersMap from "./offers-map";
import {mockCards} from "../../utils/tests-utils";
import toJson from 'enzyme-to-json';
Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OffersMap successfully rendered`, () => {

  const tree = mount(<OffersMap cards={mockCards} hoveredId = {-1} reference = {React.createRef()}/>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
