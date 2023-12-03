import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/authOperation';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    dispatch(register({ name, email, password }));
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
      <NavLink to="/login">Already have an account? Please Sign in </NavLink>
    </form>
  );
};
