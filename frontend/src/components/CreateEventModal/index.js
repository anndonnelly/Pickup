import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import CreateEventForm from "./CreateEvent";

function CreateEventModal() {
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => {
    if (showEventModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showEventModal]);

  return (
    <div className="create-event-container">
      <button
        className="create-event-button"
        onClick={() => setShowEventModal(true)}
      >
        Create Event
      </button>
      {showEventModal && (
        <Modal onClose={() => setShowEventModal(false)}>
          <CreateEventForm setShowEventModal={setShowEventModal} />
        </Modal>
      )}
    </div>
  );
}

export default CreateEventModal;
