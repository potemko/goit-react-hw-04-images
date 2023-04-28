import { useState } from "react";
import { toast } from 'react-toastify';
import css from "./Searchbar.module.css"
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ handleSearch }) => {
  const [value, setvalue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setvalue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('bad!');
      return;
    }
    handleSearch(value);
    setvalue('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={value}
        />
      </form>
    </header>
  );
};

export default Searchbar
