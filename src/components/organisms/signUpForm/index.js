import React from 'react';
import { compose, defaultProps, withHandlers } from 'recompose';

export function SignUpForm({ handleSignUp, handleInputChange, newUserData }) {
  return (
    <form onSubmit={handleSignUp}>
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            value={newUserData.firstName}
            onChange={handleInputChange}/>
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            value={newUserData.lastName}
            onChange={handleInputChange}/>

          <input
            type="email"
            name="email"
            placeholder="email"
            value={newUserData.email}
            onChange={handleInputChange}/>

          <input
            type="password"
            name="password"
            placeholder="password"
            value={newUserData.password}
            onChange={handleInputChange}/>

          <input
            type="password"
            name="passwordConfirmation"
            placeholder="passwordConfirmation"
            value={newUserData.passwordConfirmation}
            onChange={handleInputChange}/>

          <input type="submit" value='sign up' />
        </form>
  )
}

const enhance = compose(
  withHandlers({
    handleSignUp: (props) => {},
    handleInputChange: (props) => {}
  }),
  defaultProps({
    handleSignUp: () => {},
    handleInputChange: () => {},
    newUserData: {}
  })
);

export default enhance(SignUpForm);
