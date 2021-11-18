import React, {useState, useEffect} from 'react'

const Add = (props) => {
  let emptyTrip = {title: '', image_url: '', likes: '', public: '', description: '', location: ''}
  const [trip, setTrip] = useState(emptyTrip)

  const handleChange = (event) => {
    setTrip({...trip, [event.target.name]: event.target.value })

}
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(trip)
    setTrip({title: '', image_url: '', likes: '', public: '', description: '', location: ''})
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" value={trip.title} onChange={handleChange}/>
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
          <input type="checkbox" name="public" value={trip.public} onChange={handleChange} />
        <br />
        <br />
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" value={trip.description} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="location">Location: </label>
        <input type="text" name="location"  value={trip.location} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  )
}

export default Add
