import React, {useState, useEffect} from 'react'

const Add = (props) => {
  let emptyTrip = {title: '', image_url: '', likes: '', public: false, description: '', location: '', user: ''}
  const [trip, setTrip] = useState(emptyTrip)

  const handleChange = (event) => {
    setTrip({...trip, [event.target.name]: event.target.value })
  }

  const handleCheckBoxChange = (event) => {
    setTrip({...trip, [event.target.name]: event.target.checked})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(trip)
    props.handleCreate(trip)
    setTrip(emptyTrip)
  }

  useEffect(() => {
    setTrip({...trip, 'user': props.currentUser})
  }, [])


  return (
    <>
      <form className="create-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" value={trip.title} onChange={handleChange}/>
        <br />
        <label htmlFor="image_url">Image: </label>
        <input type="text" name="image_url" value={trip.image_url} onChange={handleChange} />
        <br />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" value={trip.description} onChange={handleChange} />
        <br />
        <label htmlFor="location">Location: </label>
        <input type="text" name="location"  value={trip.location} onChange={handleChange} />
        <br />
        <label htmlFor="likes">Like: </label>
        <input type="number" name="likes" value={trip.likes} onChange={handleChange} />
        <label htmlFor="public" className="public-label">Public: </label>
        <input type="checkbox" name="public" checked={trip.public} onChange={handleCheckBoxChange} />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default Add
