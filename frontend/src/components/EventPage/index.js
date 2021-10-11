import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";
import "./EventPage.css";

const EventPage = () => {
  const dispatch = useDispatch();

  

  const events = useSelector((state) => {
    return state.event.list;
   
  });
  // console.log(eventImages);
 

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (!events) {
    return null;
  }

  return (
    <main>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event}>
            <img className="event-image" src={event.image} alt="event" />
            {event.name}
          </li>
        ))}
      </ul>
      <CreateEventModal />
    </main>
  );
};

export default EventPage;
