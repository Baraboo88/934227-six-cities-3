import renderer from 'react-test-renderer';
import React from 'react';
import OffersCities from "./offers-cities";
import {mockCities} from "../../utils/tests-utils";


it(`OffersCities successfully rendered`, () => {
  const tree = renderer.create(<OffersCities citiesNames={mockCities} onCityNameClick={() => {}} activeCity = {mockCities[0]}/>);
  expect(tree).toMatchSnapshot();
});
