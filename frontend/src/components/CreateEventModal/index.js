import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import CreateEventForm from "./CreateEvent";
import { useSelector } from "react-redux";

function CreateEventModal() {
  const [showEventModal, setShowEventModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    if (showEventModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showEventModal]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks =  <button
        className="create-event-button"
        onClick={() => setShowEventModal(true)}
      >
        Create Event
      </button>
      }
      
  return (
    <div className="create-event-container">
      <div>{sessionLinks}</div>
      {showEventModal && (
        <Modal onClose={() => setShowEventModal(false)}>
          <CreateEventForm setShowEventModal={setShowEventModal} />
        </Modal>
      )}
    </div>
  );
}

export default CreateEventModal;
