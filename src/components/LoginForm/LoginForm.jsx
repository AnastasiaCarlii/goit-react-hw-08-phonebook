import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperation';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    dispatch(logIn({ email, password }));
    event.currentTarget.reset();
  };
  return (
    <div className={css.formContainer}>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit} className={css.loginForm}>
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
          autoComplete="on"
          className={css.formInput}
        />
        <button type="submit" className={css.formButton}>
          Log In
        </button>
        <NavLink to="/register" className={css.navLink}>
          Don't have an account? Please sign up!{' '}
        </NavLink>
      </form>
    </div>
  );
};
