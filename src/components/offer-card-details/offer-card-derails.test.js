import OfferCardDetails from "./offer-card-details";
import React from 'react';
import {mockCards} from '../../utils/tests-utils';
import Enzyme, {mount} from "enzyme";
import toJson from "enzyme-to-json";
import EnzymeReactAdapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new EnzymeReactAdapter()});
it(`OfferCardDetails successfully rendered`, () => {
  const tree = mount(<OfferCardDetails card={mockCards[0]} onHeaderClick = {() => {}} neighbors = {mockCards}/>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
