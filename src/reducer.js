import offers from './mocks/offers';

export const getCities = (initialOffers) => {
  const cities = new Set();
  initialOffers.forEach((offer) => cities.add(offer.city));
  return [...cities];
};


const initialState = {
  city: getCities(offers)[0],
  offers,
  citiesNames: getCities(offers)
};

export const reducer = (state = initialState) => {
  return state;
};
