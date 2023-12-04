import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';

import css from './UserMenu.module.css';
import { FaHouseChimneyUser } from 'react-icons/fa6';
import { TbLogout2 } from 'react-icons/tb';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.menuContainer}>
      <p className={css.userName}>
        {' '}
        <FaHouseChimneyUser size={20} />
        {''} Hello, {user.name}. Nice to see you again!{' '}
      </p>
      <button
        className={css.menuBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <TbLogout2 size={20} /> Log Out
      </button>
    </div>
  );
};

export default UserMenu;
