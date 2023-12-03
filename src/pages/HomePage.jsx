import React from 'react';
import { Link } from 'react-router-dom';
import phoneBook from '../components/Images/phoneBook.jpg';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Hello! Welcome to contact book</h1>
      <Link className={css.startLink} to="contacts">
        Start
      </Link>
      <div className={css.image}>
        <img
          className={css.backgroundImg}
          src={phoneBook}
          alt="background with phone"
        />
      </div>
    </div>
  );
};

export default HomePage;
