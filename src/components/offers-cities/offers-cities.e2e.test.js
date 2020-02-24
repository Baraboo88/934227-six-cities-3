import Enzyme, {shallow} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr} from '../../utils/tests-utils';
import OffersCities from './offers-cities';
import {mockCities} from '../../utils/tests-utils';

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`City click is working`, () => {
  const cityClickHandler = jest.fn();
  const app = shallow(<OffersCities citiesNames={mockCities} onCityNameClick={cityClickHandler} />);

  const cities = findByTestAtr(app, `test-city-click`);
  const event = {
    preventDefault: () => {}
  };

  cities.forEach((city) => city.simulate(`click`, event));

  expect(cityClickHandler).toHaveBeenCalledTimes(2);
});
