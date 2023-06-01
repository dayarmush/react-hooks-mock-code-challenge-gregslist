function Sort({ isChecked, updateCheck}) {
    return (
    <label>
      <input type="checkbox"
      name='checkbox'
       checked={isChecked} 
       onChange={updateCheck}
      />
      <span>Sort Alphabetically</span>
     </label>
    )
}

export default Sort