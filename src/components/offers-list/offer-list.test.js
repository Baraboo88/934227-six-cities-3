import React from 'react';
import {mockCards, mockCities, userData} from '../../utils/tests-utils';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {getCities} from "../../utils/utils";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import OffersList from "./offers-list";
import {BrowserRouter} from "react-router-dom";

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

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`Card successfully successfully rendered`, () => {
  const tree = mount(
      <Provider store={store}>
        <BrowserRouter>
          <OffersList cards={mockCards} onHeaderClick ={() => {}}/>
        </BrowserRouter>
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
