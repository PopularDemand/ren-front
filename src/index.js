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

ReactDOM.render(
  <Home signUpData={signUpProps} />,
  document.getElementById('app')
);