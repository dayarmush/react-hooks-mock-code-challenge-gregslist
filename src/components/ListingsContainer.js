import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ renderList }) {
  return (
    <main>
      <ul className="cards">
        {renderList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
