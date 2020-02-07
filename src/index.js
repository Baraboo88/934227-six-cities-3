import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";

export const data = {
  numberOfOffers: 312,
  cards: [`Beautiful &amp; luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]
};

ReactDOM.render(<App {...data}/>, document.querySelector(`#root`));
