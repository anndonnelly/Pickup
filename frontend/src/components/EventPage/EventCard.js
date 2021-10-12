import "./EventPage.css";
import EditEventForm from "../EditEvent/index.js";
import { useState } from "react";

export const EventCard = ({ image, date, name, description}) => {
    const [isEditing, setIsEditing] = useState(false)

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
          {isEditing && <EditEventForm />}
          <a href="#">Delete</a>
        </div>
      </div>
    );
}

    




