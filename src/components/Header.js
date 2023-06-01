import { useState } from "react";
import Search from "./Search";

function Header({ filterSearch, search, isChecked, setIsChecked }) {

  function updateCheck(e) {
    setIsChecked(e.target.checked)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterSearch={filterSearch} search={search}/>
      <label>
        <input type="checkbox" checked={isChecked} onChange={updateCheck}/>
        <span>Sort Alphabetically</span>
      </label>
    </header>
  );
}

export default Header;
