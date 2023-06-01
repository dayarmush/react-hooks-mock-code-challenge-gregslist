import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingCard from "./ListingCard";

function App() {

  const [isChecked, setIsChecked] = useState(false)
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listingData => setListings(listingData))
  }, [isChecked])

  if(!listings) return <h3>Loading...</h3>

  let renderList;

  if (isChecked) {

    renderList = listings
    .sort((a, b) => a.description.localeCompare(b.description))
    .filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    .map(listing => {
      return <ListingCard key={listing.id} listing={listing} setListings={setListings}/>
  })

  } else if (search) {

    renderList = listings
    .filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    .map(listing => {
      return <ListingCard key={listing.id} listing={listing} setListings={setListings}/>
  })

  } else {

    renderList = listings.map(listing => {
      return <ListingCard key={listing.id} listing={listing} setListings={setListings}/>
    })

  }

  function filterSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="app">

      <Header 
        filterSearch={filterSearch} 
        search={search}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />

      <ListingsContainer 
        renderList={renderList}
      />

    </div>
  );
}

export default App;
