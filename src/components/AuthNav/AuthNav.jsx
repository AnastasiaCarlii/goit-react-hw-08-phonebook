import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul>
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
// className={css.navList}
// className={css.navItem}
// className=>{css.navItem}
