import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, handleChangeFilter }) => {
  return (
    <label className={css.text}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
