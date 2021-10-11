import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CreateEvent.css";


function CreateEventForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
//   const [type, setType] = useState("");
//   const [image, setImage] = useState("");
//   const [time, setTime] = useState("");
//   const [date, setDate] = useState("YYYY/MM/DD");
//   const [eventAttendees, setEventAttendees] = useState(0);

  //TODO ownerid for create event
  //TODO location for create event

  const handleSubmit = () => {};

  return (
    <div className="createEventModal">
      <div className="modalHeader">
        <p>Create Event</p>
      </div>
      <div>
        <form>
          <div className="fieldDiv">
            <label>Event Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="fieldDiv">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="createEventButton">
            <button type="submit">Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default CreateEventForm;

