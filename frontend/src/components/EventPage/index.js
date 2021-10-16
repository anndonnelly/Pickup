import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";
import { EventCard } from "./EventCard";
import { useHistory } from "react-router";
import "./EventPage.css";

const EventPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector((state) => {
    return Object.values(state.event.list);
  });

  const userId = useSelector((state) => state?.session?.user?.id);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (!events) {
    return null;
  }

  const myEvents = (e) => {
    e.preventDefault();
    if (userId) {
      history.push(`/users/${userId}/my-events`);
    } else {
      history.push(`/`);
    }
  };

  return (
    <main>
      <div className="mainCard">
        <h2 className="eventHeader">All Events</h2>
        <div className="eventButtons">
          <CreateEventModal />

          <button className="my-events-button" onClick={myEvents}>
            My Events
          </button>
        </div>

        {events?.map((event) => (
          <div>
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default EventPage;
