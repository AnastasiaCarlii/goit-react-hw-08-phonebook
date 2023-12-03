import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.formContainer}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};
