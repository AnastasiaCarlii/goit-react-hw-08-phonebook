import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <ul>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>{isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}</li>
    </ul>
  );
};
