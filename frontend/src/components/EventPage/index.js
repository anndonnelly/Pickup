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
      <div className="mainCard">
        {events.map((event) => (
          <div className="cardDiv">
            <img className="event-image" src={event.image} alt="event" />
            <div className="cardDivContent">
              <p>{event.name}</p>
            </div>
          </div>
        ))}
      </div>

      <CreateEventModal />
    </main>
  );
};

export default EventPage;
