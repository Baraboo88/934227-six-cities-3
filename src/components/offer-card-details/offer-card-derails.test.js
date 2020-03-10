import OfferCardDetails from './offer-card-details';
import React from 'react';
import {mockCards, mockCities, userData} from '../../utils/tests-utils';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {getCities} from '../../reducer/data/data-reducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createApi} from "../../api";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

const initialState = {
  data: {
    city: mockCities[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`
  },
  userData

};

const reducer = (state = initialState) => {
  return state;
};
const api = createApi();
const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`OfferCardDetails successfully rendered`, () => {
  const mockHistory = {push: jest.fn};
  const mockMatch = {
    params: {
      id: 0
    }
  };
  const tree = mount(
      <Provider store={store}>
        <BrowserRouter>
          <OfferCardDetails
            card={mockCards[0]}
            onHeaderClick={() => {}}
            history={mockHistory}
            match={mockMatch}
          />
        </BrowserRouter>
      </Provider>
  );
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
