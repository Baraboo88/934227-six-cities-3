import * as renderer from 'react-test-renderer';
import * as React from 'react';
import OffersCityItem from "./offers-city-item";
import {mockCities} from "../../utils/tests-utils";


it(`OffersCities successfully rendered`, () => {
  const mockFunc = jest.fn();
  const tree = renderer.create(<OffersCityItem cityName={mockCities[0]} activeCity={mockCities[0]} hovered={true} onHover={mockFunc} onUnHover={mockFunc} onCityNameClick={mockFunc}/>);
  expect(tree).toMatchSnapshot();
});
