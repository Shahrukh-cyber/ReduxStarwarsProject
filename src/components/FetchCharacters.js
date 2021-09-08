import { useState } from 'react';
import { fetchCharactersFromAPI } from '../store/charactersSlice';
import { useDispatch } from 'react-redux';
export const FetchCharacters = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCharactersFromAPI(value))
    setValue('');
  };

  return (
    <form className="FetchCharacters" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="Search Here"
        type="search"
        value={value}
      />
      <input type="submit" disabled={!value} />
    </form>
  );
};

export default FetchCharacters;
