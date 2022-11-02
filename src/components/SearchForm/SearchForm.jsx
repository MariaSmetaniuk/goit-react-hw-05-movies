import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Form, Input, SearchButton, ButtonLabel } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = query.trim();
    console.log(searchQuery);

    if (searchQuery !== '') {
      onSubmit(searchQuery);
    }
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
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
