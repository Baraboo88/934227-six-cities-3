export const mockTestData = {
  numberOfOffers: 32,
  cards: [
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ]
};

export const findByTestAtr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};
