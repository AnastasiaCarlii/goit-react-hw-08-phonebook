import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/authOperation';
import css from '../LoginForm/LoginForm.module.css';

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
    <div className={css.formContainer}>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit} className={css.loginForm}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className={css.formInput}
          autoComplete="on"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className={css.formInput}
          autoComplete="on"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className={css.formInput}
          autoComplete="on"
        />
        <button type="submit" className={css.formButton}>
          Sign Up
        </button>
        <NavLink to="/login" className={css.navLink}>
          Already have an account? Please log in!{' '}
        </NavLink>
      </form>
    </div>
  );
};
