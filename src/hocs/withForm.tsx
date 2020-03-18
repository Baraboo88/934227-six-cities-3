import * as React from 'react';
import {PureComponent} from 'react';

interface SignInFormProps {
  id?: number;
}

interface SignInFormPropsState {
  email: string;
  password: string;
  mark: number;
  comment: string;
  isValid: boolean;
  errorMsg: string;
  isSending: boolean;
}

const withForm = (Component) => {
  class SignInForm extends PureComponent<SignInFormProps, SignInFormPropsState> {
    constructor(props: SignInFormProps) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
        mark: 0,
        comment: ``,
        isValid: true,
        errorMsg: ``,
        isSending: false
      };
      this._emailChangeHandler = this._emailChangeHandler.bind(this);
      this._passwordChangeHandler = this._passwordChangeHandler.bind(this);
      this._validationSet = this._validationSet.bind(this);
      this._markSetHandler = this._markSetHandler.bind(this);
      this._commentSetHandler = this._commentSetHandler.bind(this);
      this._resetComments = this._resetComments.bind(this);
      this._setIsSending = this._setIsSending.bind(this);
    }

    _setIsSending(value) {
      this.setState({isSending: value});
    }

    _markSetHandler(mark) {
      this.setState({mark});
    }

    _commentSetHandler(evt) {
      const data = evt.target.value;
      this.setState({comment: data});
    }

    _emailChangeHandler(evt) {
      const data = evt.target.value;
      this.setState({email: data});
    }

    _passwordChangeHandler(evt) {
      const data = evt.target.value;
      this.setState({password: data});
    }

    _validationSet(validationValue) {
      this.setState({isValid: validationValue});
    }

    _resetComments() {
      this.setState({comment: ``, mark: 0});
      this.setState({isValid: true});
    }

    render() {
      return (
        <Component
          {...this.props}
          onEmailChange={this._emailChangeHandler}
          onPasswordChange={this._passwordChangeHandler}
          validationSet={this._validationSet}
          onMarkSet={this._markSetHandler}
          onCommentSet={this._commentSetHandler}
          isValid={this.state.isValid}
          password={this.state.password}
          email={this.state.email}
          comment={this.state.comment}
          mark={this.state.mark}
          resetComments={this._resetComments}
          setIsSending={this._setIsSending}
          isSending = {this.state.isSending}
        />
      );
    }
  }

  return SignInForm;
};

export default withForm;
