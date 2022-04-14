const PersonalityInput = ({ form, handleChange }) => {
  return (
    <>
      {/* <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name"
        required name="name" type="text" placeholder="Name" autoComplete="off"
      />
      <label htmlFor="breed">birthYear</label>
      <input
        value={form.breed ? form.breed : ''} onChange={handleChange} id="breed"
        required name="breed" type="text" placeholder="Breed" autoComplete="off"
      /> */}
      <label htmlFor="comment">comment</label>
      <input
        value={form.comment ? form.comment : ''} onChange={handleChange} id="comment"
        required name="comment" type="text" placeholder="Comment" autoComplete="off"
      />
      {/* <label htmlFor="age">Age</label>
      <input
        value={form.age ? form.age : ''} onChange={handleChange} id="age"
        required name="age" type="number" placeholder="Age" autoComplete="off"
      /> */}
    </>
  )
}

export default PersonalityInput