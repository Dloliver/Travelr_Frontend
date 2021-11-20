import React, {useState} from 'react'
import '../css/Modals.css'

import GoogleMap from './Maps'

const Modal = (props) => {
  const [show, setShow] = useState(false)


  if(!props.show) {
    return null
  }

  return (
    <div id="modal">
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title"> Location </h4>
          </div>
          <div class="modal-body">
          <button onClick={props.onClose} class="button">Close</button>

            <GoogleMap />
          </div>
          
        </div>
    </div>
    </div>
  )

}

export default Modal
