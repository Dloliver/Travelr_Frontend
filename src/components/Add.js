import React, {useState, useEffect} from 'react'

const Add = (props) => {
  let emptyTrip = {title: '', image_url: '', likes: '', public: false, description: '', location: '', user: ''}
  const [trip, setTrip] = useState(emptyTrip)
  const [createFormHidden, setCreateFormHidden] = useState(true)

  const handleChange = (event) => {
    setTrip({...trip, [event.target.name]: event.target.value })
  }

  const handleCheckBoxChange = (event) => {
    setTrip({...trip, [event.target.name]: event.target.checked})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(trip)
    setCreateFormHidden(true)
    props.handleCreate(trip)
    setTrip(emptyTrip)
  }

  // Show/hide create button
  const handleButtonToggle = (event) => {
       if (event.target.id == "create-form") {
            setCreateFormHidden(true)
       } else{
            setCreateFormHidden(false)
       }
  }

  useEffect(() => {
    setTrip({...trip, 'user': props.currentUser})
  }, [])


  return (
    <>
      <button onClick={handleButtonToggle}>Create Post</button>
      <div className={createFormHidden ? "hidden" : "create-form"}>
         <form onSubmit={handleSubmit}>
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
      </div>
    </>
  )
}

export default Add
