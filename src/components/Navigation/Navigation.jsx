import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <ul className={css.navStyle}>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>{isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}</li>
    </ul>
  );
};
