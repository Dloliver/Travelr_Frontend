import React from 'react'
import '../css/Modals.css'

import MapContainer from './Maps'

const Modal = (props) => {

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

            <MapContainer />
          </div>

        </div>
    </div>
    </div>
  )

}

export default Modal
