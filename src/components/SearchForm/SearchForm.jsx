import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Form, Input, SearchButton, ButtonLabel } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query') ?? '';

  // при сабміті відправляю пошукове слово, якщо воно не порожній рядок
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = queryValue.trim();

    if (searchQuery !== '') {
      onSubmit(searchQuery);
    }
  };

  // при введенні даних в інпут змінюю пошуковий рядок
  const handleChange = e => {
    const { value } = e.currentTarget;
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
        value={queryValue}
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <FaSearch />
        <ButtonLabel>Search</ButtonLabel>
      </SearchButton>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
