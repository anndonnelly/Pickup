import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateEventForm from "./CreateEvent";


function CreateEventModal() {
  const [showEventModal, setShowEventModal] = useState(false);
  
  // const preventScroll = () =>{
  //   setShowEventModal(true)
  //   document.body.style.overflowY="hidden"
  // }

  // const Scroll = () => {
  //   setShowEventModal(false)
  //   document.body.style.overflowY = "scroll";
  // };


  return (
    <div className="create-event-container">
      <button className="create-event-button" onClick={() =>setShowEventModal(true)}>
        Create Event
      </button>
      {showEventModal && (
        <Modal onClose={() =>setShowEventModal(false)}>
          <CreateEventForm setShowEventModal={setShowEventModal} />
        </Modal>
      )}
    </div>
  );
}



export default CreateEventModal;
