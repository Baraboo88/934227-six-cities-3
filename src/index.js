import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer/reducer";
import {Provider} from 'react-redux';
import {createApi} from './api';
import thunk from "redux-thunk";
import {UserActionCreator, Authorization, UserOperation} from "./reducer/user/user-reducer";
import {ActionCreator} from "./reducer/data/data-reducer";

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthStatus(Authorization.NO_AUTH, null));
};

const api = createApi(onUnauthorized);


const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));

store.dispatch(ActionCreator.getOffersFromApi());
store.dispatch(UserOperation.authUser());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector(`#root`));
