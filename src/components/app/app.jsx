import React from 'react';
import Main from '../main/main.jsx';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import OfferCardDetail from '../offer-card-details/offer-card-details';
import SignIn from "../sign-in/sign-in";
import withForm from "../../hocs/withForm";

const SignInWithForm = withForm(SignIn);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/offer/:id" component={OfferCardDetail}/>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={SignInWithForm}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
