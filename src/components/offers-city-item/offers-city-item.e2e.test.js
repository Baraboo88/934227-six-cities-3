import Enzyme, {shallow} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr} from '../../utils/tests-utils';
import {mockCities} from '../../utils/tests-utils';
import OffersCityItem from "./offers-city-item";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`City click is working`, () => {
  const cityClickHandler = jest.fn();
  const app = shallow(<OffersCityItem cityName={mockCities[0]} activeCity={mockCities[0]} hovered={true} onHover={() => {}} onUnHover={() => {}} onCityNameClick={cityClickHandler} />);
  const cities = findByTestAtr(app, `test-city-click`);
  const event = {
    preventDefault: () => {}
  };

  cities.forEach((city) => city.simulate(`click`, event));

  expect(cityClickHandler).toHaveBeenCalledTimes(1);
});
