import React, {useState } from 'react'

const Edit = (props) => {
  // let emptyTrip = {id: props.id, title: '', image_url: '', likes: '', public: false, description: '', location: ''}
  const [trip, setTrip] = useState({...props.trip})


  const handleChange = (event) => {
    // if (event.target.name = "public" ) {
    //      setTrip({...trip, [event.target.name]: event.target.checked })
    // } else { 
    //      setTrip({...trip, [event.target.name]: event.target.value })
    // }

    setTrip({...trip, [event.target.name]: event.target.value})
  }

  const handleCheckBoxChange = (event) => {
    setTrip({...trip, [event.target.name]: event.target.checked})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(trip)

  }

  console.log("logged trip: ")
  console.log(trip)


  return (
    <>
      <details>
        <summary>Edit Trip</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" value={trip.title} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="image_url">Image: </label>
          <input type="text" name="image_url" value={trip.image_url} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="likes">Like: </label>
          <input type="number" name="likes" value={trip.likes} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="public">Public: </label>
          <input type="checkbox" name="public" checked={trip.public} onChange={handleCheckBoxChange} />
          <br />
          <br />
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" value={trip.description} onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="location">Location: </label>
          <input type="text" name="location" value={trip.location} onChange={handleChange} />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit
