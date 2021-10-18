import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocations } from "../../store/event";
import { getTypes } from "../../store/event";
import { createEvent } from "../../store/event";
import { useHistory } from "react-router";
import "./CreateEvent.css";

function CreateEventForm({ setShowEventModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventLocations = useSelector((state) => state.event.locations);
  const eventTypes = useSelector((state) => state.event.types);
  const ownerId = useSelector((state) => state.session.user.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [eventAttendees, setEventAttendees] = useState(0);
  const [typeId, setTypeId] = useState(1);
  const [locationId, setLocationId] = useState(1);
  const [address, setAddress] = useState("");
  const [cityAndZip, setCityAndZip] = useState("");
  const [valErrors, setValErrors] = useState([])
  

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      description,
      image,
      date,
      eventAttendees,
      locationId,
      address,
      cityAndZip,
      ownerId,
      typeId,
    };
    


    const errors = [];
    if (name.length < 4) errors.push("Please provide an event name with at least 4 characters.");
    // if (name) errors.push("This username already exists")
    //TODO
    // if (date1.getTime() > date2.getTime()) {
    //   errors.push(
    //     "'Please provide a date that is in the futute for your event'"
    //   );}
    if (!description) errors.push("Please provide a description of your event");
    if (!eventAttendees) errors.push("Please state the max amount of attendees for your event");
    if (!address) errors.push("Please provide a valid address for your event");
    setValErrors(errors);



    let createdEvent = await dispatch(createEvent(payload));
    // createEvent was created in event store
    if (createdEvent) {
      history.push(`/events/${createdEvent.id}`);
      setShowEventModal(false);
    }
  };

  return (
    <div className="createEventModal">
      <div className="modalHeader">
        <p>Create an Event</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <ul className="errors">
            {(valErrors.length > 0) ? valErrors.map((valError) => (
              <li key={valError}>{valError}</li>
            )) : null}
          </ul>
          <div className="fieldDiv">
            <label>Event Name</label>
            <input
              type="text"
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
            />
          </div>
          <div className="fieldDiv">
            <label>Image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="fieldDiv">
            <label>Time and Date</label>
            <input
              type="datetime-local"
              value={date}
              required 
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="fieldDiv">
            <label>Max Amount of Event Attendees</label>
            <input
              type="number"
              value={eventAttendees}
              onChange={(e) => setEventAttendees(e.target.value)}
            />
          </div>
          <div className="fieldDiv">
            <label>Address 1</label>
            <select
              value={locationId}
              onChange={(e) => setLocationId(e.target.value)}
            >
              {eventLocations.map((location) => (
                <option value={location.id} key={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            <label>Address 2</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label>City, ZIP Code</label>
            <input
              type="text"
              value={cityAndZip}
              onChange={(e) => setCityAndZip(e.target.value)}
            />
          </div>
          <div className="fieldDiv">
            <label>Types</label>
            <select value={typeId} onChange={(e) => setTypeId(e.target.value)}>
              {eventTypes.map((type) => (
                <option value={type.id} key={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="createEventButton">
            <button type="submit">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEventForm;






{/* <input type="file" id="input" multiple></input> */}
// to cause images folder to pop up for form submission 