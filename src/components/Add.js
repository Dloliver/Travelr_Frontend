import React, {useState, useEffect} from 'react'

const Add = (props) => {
  let emptyTrip = {title: '', image_url: '', likes: '', public: '', location: ''}
  const [trip, setTrip] = useState(emptyTrip)

  const handleChange = (event) => {
    setTrip({...trip, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(trip)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" />
        <br />
        <br />
        <label htmlFor="image_url">Image: </label>
        <input type="text" name="image_url" />
        <br />
        <br />
        <label htmlFor="likes">Like: </label>
        <input type="number" name="likes" />
        <br />
        <br />
        <label htmlFor="public">Public: </label>
        <input type="boolean" name="public" />
        <br />
        <br />
        <label htmlFor="location">Location: </label>
        <input type="text" name="location" />
        <input type="submit" />
      </form>
    </>
  )
}

export default Add
