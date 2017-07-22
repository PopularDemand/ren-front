import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/Home';

const signUpProps = {
  firstName: '',
  lastName: '',
  email: 'yo@lo.com',
  password: '',
  passwordConfirmation: ''
};

const Auth = require('j-toker');

const promise = Auth.configure({
  apiUrl: 'http://localhost:5000'
});

promise.always(function() {
  ReactDOM.render(
    <Home signUpData={signUpProps} />,
    document.getElementById('app')
  );
});