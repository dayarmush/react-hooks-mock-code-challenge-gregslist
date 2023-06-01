import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listingData => setListings(listingData))
  }, [])

  if(!listings) return <h3>Loading...</h3>

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer listings={listings} search={search} setListings={setListings} />
    </div>
  );
}

export default App;
