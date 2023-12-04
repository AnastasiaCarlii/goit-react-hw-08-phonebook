import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';

import { fetchDeleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(fetchDeleteContact(id));

  return (
    <li className={css.listItem}>
      <span className={css.contactItem}>
        {name}:{number}
      </span>
      <button type="button" onClick={onDeleteContact}>
        <TiUserDeleteOutline size={20} />
      </button>
    </li>
  );
};
