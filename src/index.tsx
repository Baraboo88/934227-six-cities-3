import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer/reducer";
import {Provider} from 'react-redux';
import {createApi} from './api';
import thunk from "redux-thunk";
import {UserOperation} from "./reducer/user/user-reducer";
import {ActionCreator} from "./reducer/data/data-reducer";

const api = createApi();


const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument(api)), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()));

store.dispatch(ActionCreator.getOffersFromApi());
store.dispatch(UserOperation.authUser());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector(`#root`));
