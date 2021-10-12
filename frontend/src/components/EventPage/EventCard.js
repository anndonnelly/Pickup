import "./EventPage.css";
import EditEventForm from "../EditEvent/index.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../store/event";

export const EventCard = ({ id, image, date, name, description}) => {
    const [isEditing, setIsEditing] = useState(false);
    const events = useSelector((state) => state.event);
    const dispatch = useDispatch()
   
    // const event = events.list[ "asasasa", eventId]

    const event = events.list[id]
    // const location = event?.Location
    const type = event?.Type
   

    const locationName = event?.Location?.name;
    // const typeName = event?.Type.name
    // const locationAddress = event?.Location.address;
    // const locationCity = event?.Location.city;
    // const locationZipCode = event?.Location.zipCode;

  useEffect(() => {
    dispatch(deleteEvent(id));
  }, [dispatch]);
  

    return (
      <div className="cardDiv">
        <img className="event-image" src={image} alt="event" />
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
          <p className="font-bold">{name}</p>
          <p>{type?.name}</p>
          <p>{description}</p>
          {/* <p>{location}</p> */}
        </div>
        <div className="editCard">
          <a value={isEditing} onClick={() => setIsEditing(true)} href="#">
            Edit
          </a>
          {isEditing && (
            <Modal onClose={() => setIsEditing(false)}>
              <EditEventForm
                setIsEditing={setIsEditing}
                event={events.list[id]}
              />
            </Modal>
          )}
          <a value={id} onClick={} href="#">
            Delete
          </a>
        </div>
      </div>
    );
}

    




