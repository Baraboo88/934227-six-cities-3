import Enzyme, {shallow} from 'enzyme';
import EzymeReactAdapter from 'enzyme-adapter-react-16';
import React from 'react';
import {findByTestAtr, mockTestData} from '../../utils/tests-utils';
import Main from './main';

Enzyme.configure({adapter: new EzymeReactAdapter()});

it(`Card header click is working`, () => {
  const clickHandler = jest.fn();

  const app = shallow(<Main {...mockTestData} onHeaderClick={clickHandler} />);

  const headers = findByTestAtr(app, `test-header`);

  headers.forEach((header) => header.simulate(`click`));

  expect(clickHandler).toHaveBeenCalledTimes(mockTestData.cards.length);
});
