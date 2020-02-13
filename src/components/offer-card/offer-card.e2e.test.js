import Enzyme, {shallow} from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr, mockCards} from '../../utils/tests-utils';
import OfferCard from "./offer-card";

Enzyme.configure({adapter: new EnzymeReactAdapter()});

it(`Card header click is working`, () => {
  const hoverHandler = jest.fn();

  const app = shallow(<OfferCard card={mockCards[0]} onCardHover={hoverHandler}/>);

  const card = findByTestAtr(app, `test-card`);

  card.simulate(`mouseover`);

  expect(hoverHandler).toHaveBeenCalledTimes(1);
});
