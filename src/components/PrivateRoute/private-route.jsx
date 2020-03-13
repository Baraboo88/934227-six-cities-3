import React from 'react';
import {Redirect, Route} from 'react-router';
import {connect} from 'react-redux';
import {getAuthStatus, isAuthResponseReceived} from '../../reducer/user/user-selector';
import {Authorization} from '../../reducer/user/user-reducer';
import PropTypes from 'prop-types';


const PrivateRoute = (props) => {
  const {render, exact, path, isAuth} = props;

  return (
    <Route exact={exact} path={path} render={() => isAuth ? render() : <Redirect to="/login" />} />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func,
  exact: PropTypes.bool,
  path: PropTypes.string,
  isAuth: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuth: getAuthStatus(state) === Authorization.AUTH && isAuthResponseReceived(state)
});

export default connect(mapStateToProps)(PrivateRoute);
