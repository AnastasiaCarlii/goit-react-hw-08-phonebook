import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={css.navStyle}>
      <li>
        <NavLink to={'/register'}> Sign Up</NavLink>
      </li>
      <li>
        <NavLink to={'/login'}> Log In </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
