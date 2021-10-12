import "./EventPage.css";
import EditEventForm from "../EditEvent/index.js";
import { useState } from "react";
import { useSelector } from "react-redux";

export const EventCard = ({ id, image, date, name, description}) => {
    const [isEditing, setIsEditing] = useState(false);
    const events = useSelector((state) => state.event);
    // const event = events.list[ "asasasa", eventId]
    // console.log(events)
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
          <p className="font-bold">{name}</p>
          <p>{description}</p>
          {/* <p>{event.date}</p> */}
        </div>
        <div className="editCard">
          <button value={isEditing} onClick={() => setIsEditing(true)} href="#">
            Edit
          </button>
          {isEditing && <EditEventForm event={events.list.id.id}/>}
          
          <a href="#">Delete</a>
        </div>
      </div>
    );
}

    




