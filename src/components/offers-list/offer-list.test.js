import renderer from 'react-test-renderer';
import React from 'react';
import OffersList from './offers-list';
import {mockCards} from '../../utils/tests-utils';

it(`OffersList successfully rendered`, () => {
  const tree = renderer.create(<OffersList cards={mockCards} onCardHover={() => {}} onHeaderClick ={() => {}}/>);
  expect(tree).toMatchSnapshot();
});
