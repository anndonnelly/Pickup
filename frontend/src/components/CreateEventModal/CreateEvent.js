import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CreateEvent.css";

function CreateEventForm() {
  // const eventLocations = useSelector((state) => state.event.locations);
  // const eventTypes = useSelector((state) => state.event.types);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("YYYY/MM/DD");
  const [eventAttendees, setEventAttendees] = useState(0);



  //TODO ownerid for create event

  const handleSubmit = () => {};

  return (
    <div className="createEventModal">
      <div className="modalHeader">
        <p>Create an Event</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="fieldDiv">
            <label>Event Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <div className="fieldDiv">
            <label>Image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="fieldDiv">
            <label>Time</label>
            <input
              type="string"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="fieldDiv">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="fieldDiv">
            <label>Max Amount of Event Attendees</label>
            <input
              type="number"
              value={eventAttendees}
              onChange={(e) => setEventAttendees(e.target.value)}
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



          

          // eventAttendees: 6,
          // locationId: 1,
          // ownerId: 2,
          // typeId: 3,
          // createdAt: faker.date.past(1),
          // updatedAt: new Date(),

 