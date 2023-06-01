import { useState } from "react"

function Form({ form, setForm, onSubmit}) {

  function trackForm(e) {
    const key = e.target.name;
    const value = e.target.value
    setForm(pre => {
      return {...pre, [key]: value}
    })
  }

  return (
    <form onSubmit={onSubmit} >
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={trackForm}
          value={form.description}
        />
        <input
          type="text"
          name="image" 
          placeholder="image"
          onChange={trackForm}
          value={form.image}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          onChange={trackForm}
          value={form.location}
        />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form