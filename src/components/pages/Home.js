import React, { PureComponent } from 'react';
import { Map, fromJS } from 'immutable';
import _ from 'lodash';

const Auth = require('j-toker');
const PubSub = require('pubsub-js');

class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.emailSignUp = this.emailSignUp.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._signOut = this._signOut.bind(this);
    // this._renderRegisterSignIn = this._renderRegisterSignIn.bind(this);
    // this._renderSignOut = this._renderSignOut.bind(this);
    // this.userSignedIn = this.userSignedIn.bind(this);

    this.state = {
      signUpData: { ...props.signUpData },
      user: this.props.user
    };
  }

  componentWillMount() {
    PubSub.subscribe('auth', function(e) {
      this.state = _.merge({}, this.state, {user: Auth.user});
    }.bind(this));
  }

  _handleInputChange(e) {
    const change = {[e.target.name]: e.target.value};
    const newState = _.merge({}, this.state.signUpData, change);
    this.setState({signUpData: newState});
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    this.emailSignUp()
    .then(console.log)
    .fail(console.error);
  }

  emailSignUp() {
    return Auth.emailSignUp({
      first_name: this.state.signUpData.firstName,
      last_name: this.state.signUpData.lastName,
      email: this.state.signUpData.email,
      password: this.state.signUpData.password,
      password_confirmation: this.state.signUpData.passwordConfirmation,
      nickname: 'Bubbles'
    }).then((res) => {
      // this.setState({user: res.data})
      // this.state = _.merge({}, this.state, {user: res.data});
      // return res.data;
    });
  }

  _signOut() {
    // debugger;
    return Auth.signOut()
    .then(() => {
      return this.state.user = {};
    });
  }

  getUser() {
    // return Auth.validateToken()
    // .then(function() {
    //   return Auth.user.signedIn ? Auth.user.email : false;
    // });
    return Auth.user.email;
  }

  userSignedIn() {
    return Auth.user.signedIn;
  }

  _renderForm() {
    return this.state.user ? this._renderSignOut() : this._renderRegisterSignIn();
  }

  _renderSignOut() {
    return(
      <button onClick={this._signOut}>Sign out</button>
    );
  }

  render() {
    return (
      <div className="homepage">
        words
        <button className="btn btn-primary">this is a button</button>
        <button className="btn btn-success">this is a button</button>
      </div>
    );
  }
}

export default Home;