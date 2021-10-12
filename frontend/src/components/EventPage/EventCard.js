import "./EventPage.css";
export const EventCard = ({ image, date, name, description, isEditEnable }) => (
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
    {isEditEnable && (
      <div className="editCard">
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </div>
    )}
  </div>
);
