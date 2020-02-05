import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx";

const Data = {
  numberOfOffers: 312
};

ReactDOM.render(<App {...Data}/>, document.querySelector(`#root`));
