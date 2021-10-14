import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent, getTypes, getLocations } from "../../store/event";

import "./EditEvent.css";
const EditEventForm = ({ event, setIsEditing }) => {
  const eventTypes = useSelector((state) => state.event.types);
  const eventLocations = useSelector((state) => state.event.locations);
  const dispatch = useDispatch();
  const location = eventLocations.find((loc) => loc.id === event.locationId);
 

  const [name, setName] = useState(event?.name);
  const [description, setDescription] = useState(event?.description);
  const [image, setImage] = useState(event?.image);
  const [date, setDate] = useState(event?.date);
  const [eventAttendees, setEventAttendees] = useState(event?.eventAttendees);
  const [typeId, setTypeId] = useState(event?.typeId);
  const [locationId, setLocationId] = useState(event?.locationId);
  const [address, setAddress] = useState(location?.address || "");
  const [cityAndZip, setCityAndZip] = useState(location?.city || "");
 

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateImage = (e) => setImage(e.target.value);
  const updateDate = (e) => setDate(e.target.value);
  const updateEventAttendees = (e) => setEventAttendees(e.target.value);
  const updateTypeId = (e) => setTypeId(e.target.value);
  const updateLocationId = (e) => setLocationId(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCityAndZip = (e) => setCityAndZip(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...event,
      name,
      description,
      image,
      date,
      eventAttendees,
      typeId,
      locationId,
      address,
      cityAndZip,
    };

    const updatedEvent = await dispatch(updateEvent(payload));
    if (updatedEvent) {
      setIsEditing(false);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

   useEffect(() => {
     dispatch(getLocations());
     dispatch(getTypes());
   }, [dispatch]);

  useEffect(() => {
    if (location) {setAddress(location.address)
    setCityAndZip(`${location.city} ${location.zipCode}`);
    }

  }, [location]);


  return (
    <section className="edit-form-holder centered middled">
      <div className="modalHeader">
        <p>Edit an event</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="fieldDiv">
          <label>Event Name</label>
          <input type="text" required value={name} onChange={updateName} />
        </div>
        <div className="fieldDiv">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={updateDescription}
            required
          />
        </div>
        <div className="fieldDiv">
          <label>Image</label>
          <input type="text" value={image} onChange={updateImage} required />
        </div>
        <div className="fieldDiv">
          <label>Time and Date</label>
          <input
            type="datetime-local"
            value={date}
            onChange={updateDate}
            required
          />
        </div>
        <div className="fieldDiv">
          <label>Max Amount of Event Attendees</label>
          <input
            type="number"
            value={eventAttendees}
            onChange={updateEventAttendees}
            required
          />
        </div>
        <div className="fieldDiv">
          <label>Address 1</label>
          <select value={locationId} required onChange={updateLocationId}>
            {eventLocations.map((location) => (
              <option value={location.id} key={location.id}>
                {location.name}
              </option>
            ))}
          </select>
          <label>Address 2</label>
          <input type="text" value={address} onChange={updateAddress} />
          <label>City, ZIP Code</label>
          <input
            type="text"
            value={cityAndZip}
            onChange={updateCityAndZip}
            required
          />
        </div>
        <div className="fieldDiv">
          <label>Types</label>
          <select value={typeId} onChange={updateTypeId}>
            {eventTypes.map((type) => (
              <option value={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div className="createEventButton editButtonDiv">
          <button type="submit">Create New Event</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditEventForm;


//  <div className="fieldDiv">
//    <label>Locations</label>
//    <select value={locationId} onChange={updateLocationId}>
//      {eventLocations.map((location) => (
//        <option value={location.id} key={location.id}>
//          {location.name}
//        </option>
//      ))}
//    </select>
//    <label>Address 2</label>
//    <input type="text" value={address} onChange={updateAddress} />
//  </div>;
