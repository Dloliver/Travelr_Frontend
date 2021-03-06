import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Header from './components/Header'
import Modal from './components/Modals'


const App = () => {
  let [travels, setTravels] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [show, setShow] = useState(false)

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
    addTrip.user = currentUser
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

  const handleLike = (e, post, likes) => {
    axios.put('https://travelr-backend.herokuapp.com/api/posts/' + e.target.value, {...post, 'likes': likes + 1})
    .then((err) => {
      getTravels()
    })

  }

  ///////// LOGIN, SIGN UP, AND LOGOUT FUNCTIONALITY /////////
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
      if(response.data.email){
        console.log(response.data.email)
        alert('Welcome, ' + response.data.email)
        setCurrentUser(response.data.email)
      }else{
        alert('Incorrect username or password.')
      }

    }).catch(() => {
      alert('Incorrect username or password.')
    })
  }

  const handleLogOut = () => {
    setCurrentUser('')
    alert("You have been logged out.")
  }

  useEffect(() => {
    getTravels()
  }, [])

  return (
    <>
    <Header handleSignUp={handleSignUp} handleLogIn={handleLogIn} handleLogOut={handleLogOut} currentUser={currentUser}/>
      {currentUser ? <Add handleCreate={handleCreate} currentUser={currentUser}/> : null}
      <div className="travels">
        {travels.map((trip) => {
          return trip.public || trip.public == false && trip.user == currentUser ?
          (
            <div className="trip" key={trip.id}>
               <h4>{trip.title}</h4>
               <img src={trip.image_url}/>
               <div id="likes-wrap">
                  <button onClick={(e) => {handleLike(e, trip, trip.likes)}} value={trip.id}>Like</button>
                  <h5 id="num-likes">Likes: {trip.likes}</h5>
                  <h5>{trip.public ? "Public" : "Private"}</h5>
               </div>
               <h5>{trip.description}</h5>
               <div id="location-wrap">
                  <h5>Location: {trip.location}</h5>
                  <button onClick={() => setShow(true)}>Show Map</button>
                  <Modal onClose={() => setShow(false)} show={show} />
               </div>
               <Edit handleUpdate={handleUpdate} id={trip.id} trip={trip} />
               <button id="remove-btn" onClick={handleDelete} value={trip.id}>
               Remove
               </button>
            </div>
          )
          : null
        })}
      </div>
    </>
  )
}

export default App
