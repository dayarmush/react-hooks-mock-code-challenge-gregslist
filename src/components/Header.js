import { useState } from "react";
import Search from "./Search";
import Sort from "./Sort";
import Form from "./Form";

function Header({ filterSearch, search, isChecked, setIsChecked, setListings}) {

  const blankForm = {
    'description': '',
    'image': '',
    'location': '',
  }

  const [form, setForm] = useState(blankForm)

  function handleSubmit(e) {
    e.preventDefault()
    setForm(blankForm)

    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(newListing => setListings(preListings => [...preListings, newListing]))
  }

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
      <Sort isChecked={isChecked} updateCheck={updateCheck} />
      <Form form={form} setForm={setForm} onSubmit={handleSubmit}/>
    </header>
  );
}

export default Header;
