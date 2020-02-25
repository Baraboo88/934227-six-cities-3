import {Action, getCities, reducer} from "./reducer";
import {mockCards} from "./utils/tests-utils";

it(`Reducer add hoveredId`, () => {
  expect(reducer({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1
  }, {type: Action.SET_HOVERED, payload: 2})).toEqual({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: 2
  });
});

it(`Reducer reset hoveredId`, () => {
  expect(reducer({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1
  }, {type: Action.RESET_HOVERED})).toEqual({
    city: getCities(mockCards)[0],
    mockCards,
    citiesNames: getCities(mockCards),
    hoveredId: -1
  });
});
