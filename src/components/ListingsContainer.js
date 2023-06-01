import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, search, setListings }) {

  const renderList = listings
  .filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
  .map(listing => {
    return <ListingCard key={listing.id} listing={listing} setListings={setListings}/>
  })
  return (
    <main>
      <ul className="cards">
        {renderList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
