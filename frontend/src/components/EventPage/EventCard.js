import "./EventPage.css";
import EditEventForm from "../EditEvent/index.js";
import { useState } from "react";
import { useSelector } from "react-redux";

export const EventCard = ({ id, image, date, name, description}) => {
    const [isEditing, setIsEditing] = useState(false);
    const events = useSelector((state) => state.event);
    // const event = events.list[ "asasasa", eventId]
    // console.log(events)

    const event = events.list[id]
    // console.log(event, "hsjbxhsbxhsb");
    // const location = event?.Location
    const type = event?.Type
    console.log(type, "bjanzajnzjanzjanz" )


    const locationName = event?.Location?.name;
    // const typeName = event?.Type.name
    // const locationAddress = event?.Location.address;
    // const locationCity = event?.Location.city;
    // const locationZipCode = event?.Location.zipCode;
 
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
          <p>{type.name}</p>
          <p>{description}</p>
          {/* <p>{location}</p> */}
        </div>
        <div className="editCard">
          <button value={isEditing} onClick={() => setIsEditing(true)} href="#">
            Edit
          </button>
          {isEditing && (
            <EditEventForm
              setIsEditing={setIsEditing}
              event={events.list[id]}
            />
          )}
          <a href="#">Delete</a>
        </div>
      </div>
    );
}

    




