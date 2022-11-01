import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Form, Input, SearchButton, ButtonLabel } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = query.trim();

    if (searchQuery !== '') {
      onSubmit(searchQuery);
    }
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
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
