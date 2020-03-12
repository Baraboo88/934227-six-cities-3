import React from 'react';
import Main from './main';
import {mockCards, mockCities, userData} from '../../utils/tests-utils';
import Enzyme, {mount} from "enzyme";
import EnzymeReactAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import {getCities} from "../../utils/utils";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";
import {Authorization} from "../../reducer/user/user-reducer";


Enzyme.configure({adapter: new EnzymeReactAdapter()});

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

const mockLocation = {
  location: {
    search: ``,
    pathname: ``
  }
};

it(`Main successfully rendered`, () => {
  const tree = mount(<Provider store={store}><BrowserRouter><Main cards = {mockCards} onHeaderClick = {() => {}} location = {mockLocation}/></BrowserRouter></Provider>);
  expect(toJson(tree, {mode: `deep`})).toMatchSnapshot();
});
