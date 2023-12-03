import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.layoutContainer}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to={'/register'}> Sign Up</NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to={'/login'}> Log In </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
