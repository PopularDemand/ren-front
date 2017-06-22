import React, { PureComponent } from 'react';
import { Map, fromJS } from 'immutable';
import _ from 'lodash';

const Auth = require('j-toker');

Auth.configure({
  apiUrl: 'http://localhost:5000'
});

const OMIT_PROPS = ['user'];

class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.emailSignUp = this.emailSignUp.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);

    this.state = {
      signUpData: { ...this.props.signUpData },
      user: this.props.user
    };
  }

  _handleInputChange(e) {
    const change = {[e.target.name]: e.target.value};
    const newState = _.merge({}, this.state.signUpData, change);
    this.setState({signUpData: newState})
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
      this.setState({user: res.data})
      return res.data;
    });
  }

  getUser() {
    return Auth.user.email;
  }

  render() {
    let signUpData = this.state.signUpData;
    return (
      <div id="homepage">
        <p className="greeting">Hello Ren</p>
        <p>the current user is {this.getUser()}</p>

        <form onSubmit={this._handleFormSubmit}>
          <input
            type="text"
            name="firstName"
            value={signUpData.firstName}
            onChange={this._handleInputChange}/>
          <input
            type="text"
            name="lastName"
            value={signUpData.lastName}
            onChange={this._handleInputChange}/>

          <input
            type="email"
            name="email"
            value={signUpData.email}
            onChange={this._handleInputChange}/>

          <input
            type="password"
            name="password"
            value={signUpData.password}
            onChange={this._handleInputChange}/>

          <input
            type="password"
            name="passwordConfirmation"
            value={signUpData.passwordConfirmation}
            onChange={this._handleInputChange}/>

          <input type="submit" value='submit' />
        </form>
        <button onClick={() => this.emailSignUp()}>Sign up</button>
      </div>
    );
  }
}

export default Home;