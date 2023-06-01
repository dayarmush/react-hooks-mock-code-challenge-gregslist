import { useState } from "react";

function ListingCard({ listing, setListings }) {

  const [isLiked, setIsLiked] = useState(false)

  const {id, description, image, location} = listing

  function like() {
    setIsLiked(pre => !pre)
  }

  function handleDelete(e) {
    const id = parseInt(e.target.id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    .then(setListings(pre => pre.filter(listing => listing.id !== id)))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={like}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={like}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" id={id} onClick={handleDelete} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
