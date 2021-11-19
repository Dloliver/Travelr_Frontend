import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Header from './components/Header'


const App = () => {
  let [travels, setTravels] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  const getTravels = () => {
    axios
      .get('https://travelr-backend.herokuapp.com/api/posts')
      .then(
        (response) => setTravels(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const handleCreate = (addTrip) => {
    console.log(addTrip)
    axios
      .post('https://travelr-backend.herokuapp.com/api/posts', addTrip)
      .then((response) => {
        console.log(response)
        getTravels()
      })
  }

  const handleDelete = (event) => {
    axios
      .delete('https://travelr-backend.herokuapp.com/api/posts/' + event.target.value)
      .then((response) => {
        getTravels()
      })
  }

  const handleUpdate = (editTrip) => {
    console.log(editTrip)
    axios
      .put('https://travelr-backend.herokuapp.com/api/posts/' + editTrip.id, editTrip)
      .then((response) => {
        getTravels()
      })
  }
  
  ///////// LOGIN AND SIGN UP FUNCTIONALITY /////////
  const handleSignUp = (reqBody) => {
    axios.post('https://travelr-backend.herokuapp.com/api/useraccount', reqBody)
    .then(() => {
      alert('Welcome, ' + reqBody.email)
      setCurrentUser(reqBody.email)
    })
  }

  const handleLogIn = (reqBody) => {
    console.log(reqBody)
    axios.put('https:travelr-backend.herokuapp.com/api/useraccount/login', reqBody)
    .then((response) => {
      console.log(response.data.email)
      alert('Welcome, ' + response.data.email)
    }).catch(() => {
      alert('Incorrect username or password')
    })
  }


  useEffect(() => {
    getTravels()
  }, [])

  return (
    <>
    <Header handleSignUp={handleSignUp} handleLogIn={handleLogIn} currentUser={currentUser}/>
      <Add handleCreate={handleCreate} />
      <div className="travels">
        {travels.map((trip) => {
          return (
            <div className="trip" key={trip.id}>
            <h4>Name: {trip.title}</h4>
            <h5>{trip.user}</h5>
            <img src={trip.image_url}/>
            <h5>Likes: {trip.likes}</h5>
            <h5>Public: {trip.public ? "true" : "false"}</h5>
            <h5>Description: {trip.description}</h5>
            <h5>Location: {trip.location}</h5>
            <Edit handleUpdate={handleUpdate} id={trip.id} trip={trip} />
            <button onClick={handleDelete} value={trip.id}>
            Remove Trip
            </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
