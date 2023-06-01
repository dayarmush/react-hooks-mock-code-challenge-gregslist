import React, { useState } from "react";

function Search({ search, setSearch}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function filterSearch(e) {
    setSearch(e.target.value)
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
