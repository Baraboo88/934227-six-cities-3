import renderer from 'react-test-renderer';
import React from 'react';
import OffersCityItem from "./offers-city-item";
import {mockCities} from "../../utils/tests-utils";


it(`OffersCities successfully rendered`, () => {
  const tree = renderer.create(<OffersCityItem cityName={mockCities[0]} activeCity={mockCities[0]} hovered={true} onHover={() => {}} onUnHover={() => {}} onCityNameClick={() => {}}/>);
  expect(tree).toMatchSnapshot();
});
