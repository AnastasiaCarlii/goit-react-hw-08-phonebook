import { useAuth } from 'redux/auth/useAuth';

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
