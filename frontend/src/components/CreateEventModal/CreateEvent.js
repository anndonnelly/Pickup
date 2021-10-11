import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./CreateEvent.css";
import { getLocations } from "../../store/event";
import { getTypes } from "../../store/event";

function CreateEventForm() {
  const eventLocations = useSelector((state) => state.event.locations);
  const eventTypes = useSelector((state) => state.event.types);
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [eventAttendees, setEventAttendees] = useState(0);

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getTypes());
    
  }, [dispatch]);

  //TODO ownerid for create event

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
  };

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
            <label>Time and Date</label>
            <input
              type="datetime-local"
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
          <div className="fieldDiv">
            <label>Locations</label>
            <select>
              {eventLocations.map((location) => (
                <option key={location.id}>{location.name}</option>
              ))}
            </select>
          </div>
          <div className="fieldDiv">
            <label>Types</label>
            <select>
              {eventTypes.map((type) => (
                <option key={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          <div className="createEventButton">
            <button type="submit">Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// onChange={updateType} value={type} for Location select

export default CreateEventForm;



// eventAttendees: 6,
// locationId: 1,
// ownerId: 2,
// typeId: 3,
// createdAt: faker.date.past(1),
// updatedAt: new Date(),
