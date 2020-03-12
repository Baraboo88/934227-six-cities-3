import React from 'react';
import App from './app';
import {mockCards, mockCities, userData} from '../../utils/tests-utils';
import Enzyme, {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import {createStore} from "redux";
Enzyme.configure({adapter: new EnzymeReactAdapter()});
import {Provider} from 'react-redux';
import {getCities} from "../../utils/utils";
import {Authorization} from "../../reducer/user/user-reducer";


const initialState = {
  data: {
    city: mockCities[0],
    offers: mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1,
    filterName: `popular`
  },
  user: userData,
  authorizationStatus: Authorization.AUTH
};
const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`App successfully rendered`, () => {
  const tree = mount(<Provider store={store}><App cards={mockCards} /></Provider>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
