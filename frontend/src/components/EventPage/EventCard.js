import "./EventPage.css";
import EditEventForm from "../EditEvent/index.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../store/event";
import { getTypes } from "../../store/event";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getAllrsvps } from "../../store/event";

export const EventCard = ({ id, name, description, image, date, eventAttendees }) => {
  const [isEditing, setIsEditing] = useState(false);
  const events = useSelector((state) => state.event);
  const dispatch = useDispatch();
  const history = useHistory();
  let rsvpArr = useSelector((state) => state?.event?.rsvps);
  rsvpArr = rsvpArr?.filter((rsvp) => rsvp.eventId === id);
  // console.log("fffffff",rsvpArr);
  const attending = rsvpArr?.length;
  // const attending = events.attending.filter(rsvp => )

  const event = events.list[id];
  // const location = event?.Location
  const type = event?.Type;
  // const typeName = event?.Type.name

  const locationName = event?.Location?.name;
  const locationAddress = event?.Location?.address;
  const locationCity = event?.Location?.city;
  const locationZipCode = event?.Location?.zipCode;

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllrsvps(id));
  }, [dispatch, id]);

  return (
    <div className="cardDiv">
      <Link to={`/events/${id}`}>
        {" "}
        <img className="event-image" src={image} alt="event" />
      </Link>
      <div className="cardDivContent">
        <p>
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <p>{locationName}</p>
        <p>{locationAddress}</p>
        <p>
          {locationCity} {locationZipCode}
        </p>
        <p className="font-bold">{name}</p>
        <p>{type?.name}</p>
        <p>{description}</p>
      </div>
      <p>{`Event Attendees: ${attending} / ${eventAttendees}`}</p>
      <div className="editCard">
        <button value={isEditing} onClick={() => setIsEditing(true)}>
          {/* href="#" */}
          Edit
        </button>
        {isEditing && (
          <Modal onClose={() => setIsEditing(false)}>
            <EditEventForm
              setIsEditing={setIsEditing}
              event={events.list[id]}
            />
          </Modal>
        )}
        <button
          value={id}
          onClick={() => {
            dispatch(deleteEvent(id));
            history.push("/events");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};





