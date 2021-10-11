import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";
import "./EventPage.css";

const EventPage = () => {
  const dispatch = useDispatch();

  //  const eventNames = useSelector((state) => {
  //    return state.event.list.map((eventId) => eventId.name);
  //  });

  const eventImages = useSelector((state) => {
    return state.event.list.map((eventId) => eventId.image);
  });

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (!eventImages) {
    return null;
  }

  return (
    <main>
      <ul className="event-list">
        {eventImages.map((event) => (
          <li>
            <img className="event-image" src={event} alt="" />
          </li>
        ))}
      </ul>
      <CreateEventModal />
    </main>
  );
};

export default EventPage;
