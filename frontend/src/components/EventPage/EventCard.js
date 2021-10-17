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
import { useParams } from "react-router-dom";

export const EventCard = ({
  id,
  name,
  description,
  image,
  date,
  eventAttendees,
  isEditEnabled,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const events = useSelector((state) => state.event);
  const dispatch = useDispatch();
  const history = useHistory();
  let rsvpArr = useSelector((state) => state?.event?.rsvps);
  rsvpArr = rsvpArr?.filter((rsvp) => rsvp.eventId === id);

  const attending = rsvpArr?.length;
  // const attending = events.attending.filter(rsvp => )

  const event = events.list[id];
  // const location = event?.Location
  const type = event?.Type;
  // const typeName = event?.Type.name
  const {eventId} = useParams();

  const locationName = event?.Location?.name;
  const locationAddress = event?.Location?.address;
  const locationCity = event?.Location?.city;
  const locationZipCode = event?.Location?.zipCode;

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllrsvps(id));
  }, [dispatch, id,]);

  useEffect(() => {
    if (isEditing) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isEditing]);


  return (
    <div className="cardDiv">
      <div className="cardHeader">
        <div className="cardHeaderContent">
          <span className="colorTeal">
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          <span
            onClick={() => history.push(`/events/${id}`)}
            className="font-bold"
          >
            {name}
          </span>
          <span className="colorGrey">{`${locationName} ${locationAddress} ${locationCity} ${locationZipCode}`}</span>
          <span className="cardDescription">{description}</span>
          <div>
            <p>{`Event Attendees: ${attending} / ${eventAttendees}`}</p>
            {isEditEnabled && (
              <div className="myEventButtons">
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
            )}
          </div>
        </div>
        <Link to={`/events/${id}`}>
          {" "}
          <img className="event-image" src={image} alt="event" />
        </Link>
      </div>
    </div>
  );
};



