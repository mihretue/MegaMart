import React, { useState, useEffect } from 'react';
import '../component.css'
const SearchWithAutocomplete = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      // Fetch autocomplete suggestions
      fetch(`/api/suggestions?query=${query}`)
        .then((response) => response.json())
        .then((data) => setSuggestions(data));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSelect = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={() => console.log('Searching for:', query)} className="search-button">
        <i className="bi bi-search"></i>
      </button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchWithAutocomplete;
