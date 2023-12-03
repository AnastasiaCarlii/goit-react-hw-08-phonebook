import { useDispatch, useSelector } from 'react-redux';
import css from './SearchFilter.module.css';

import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <ul className={css.formContainer}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.searchInput}
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value.trim()))}
        />
      </label>
    </ul>
  );
};
