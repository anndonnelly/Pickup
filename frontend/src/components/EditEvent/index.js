import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent, getTypes } from "../../store/event";

const EditEventForm = ({ event, setIsEditing }) => {
  const eventTypes = useSelector((state) => state.event.types);
  const eventLocations = useSelector((state) => state.event.locations);
  const dispatch = useDispatch();

  const [name, setName] = useState(event?.name);
  const [description, setDescription] = useState(event?.description);
  const [image, setImage] = useState(event?.image);
  const [date, setDate] = useState(event?.date);
  const [eventAttendees, setEventAttendees] = useState(event?.eventAttendees);
  const [typeId, setTypeId] = useState(event?.typeId);
  const [locationId, setLocationId] = useState(event?.locationId);
  const [address, setAddress] = useState(event?.address);

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateImage = (e) => setImage(e.target.value);
  const updateDate = (e) => setDate(e.target.value);
  const updateEventAttendees = (e) => setEventAttendees(e.target.value);
  const updateTypeId = (e) => setTypeId(e.target.value);
  const updateLocationId = (e) => setLocationId(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

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

  return (
    <section className="edit-form-holder centered middled">
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
          <label>Locations</label>
          <select value={locationId} onChange={updateLocationId}>
            {eventLocations.map((location) => (
              <option value={location.id} key={location.id}>
                {location.name}
              </option>
            ))}
          </select>
          <label>Address 2</label>
          <input type="text" value={address} onChange={updateAddress} />
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
        <div className="createEventButton">
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
