import React, { useState } from "react";

function Search({ filterSearch, search }) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={ filterSearch }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
