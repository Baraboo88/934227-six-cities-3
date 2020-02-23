import renderer from 'react-test-renderer';
import React from 'react';
import {mockCards} from '../../utils/tests-utils';
import OfferReviewList from "./offer-review-list";

it(`Card Details successfully rendered`, () => {
  const tree = renderer.create(<OfferReviewList comments = {mockCards[0].comments}/>);
  expect(tree).toMatchSnapshot();
});
