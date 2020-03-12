import Enzyme, {mount} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr, mockCards, mockCities, userData} from '../../utils/tests-utils';
import OfferCard from './offer-card';
import {getCities} from "../../utils/utils";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

const initialState = {
  data: {
    city: mockCities[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`
  },
  user: {
    authorizationStatus: true,
    userData
  }
};

const reducer = (state = initialState) => {
  return state;
};
const store = createStore(reducer);

it(`Card header click is working`, () => {
  const headerClickHandler = jest.fn();
  const app = mount(
      <Provider store={store}>
        <BrowserRouter>
          <OfferCard card={mockCards[0]} onHeaderClick={headerClickHandler} />
        </BrowserRouter>
      </Provider>
  );

  const cardHeader = findByTestAtr(app, `test-header-click`);
  const event = {
    preventDefault: () => {}
  };

  cardHeader.simulate(`click`, event);
  expect(headerClickHandler).toHaveBeenCalledTimes(1);
});
