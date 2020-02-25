import offers from './mocks/offers';

export const getCities = (initialOffers) => {
  const cities = new Set();
  initialOffers.forEach((offer) => cities.add(offer.city));
  return [...cities];
};

export const Action = {
  SET_HOVERED: `set-hovered`,
  RESET_HOVERED: `reset-hovered`
};

export const ActionCreator = {
  setHovered(id) {
    return {type: Action.SET_HOVERED, payload: id};
  },
  resetHovered() {
    return {type: Action.RESET_HOVERED};
  }
};


const initialState = {
  city: getCities(offers)[0],
  offers,
  citiesNames: getCities(offers),
  hoveredId: -1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SET_HOVERED:
      return Object.assign({}, state, {hoveredId: action.payload});
    case Action.RESET_HOVERED:
      return Object.assign({}, state, {hoveredId: -1});
  }
  return state;
};
