import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";
import { EventCard } from "./EventCard";
import { useHistory } from "react-router";


const EventPage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const events = useSelector((state) => {
    return Object.values(state.event.list);
  });

  const userId = useSelector(state => state.session.user.id)

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (!events) {
    return null;
  }

  const myEvents = (e) => {
    e.preventDefault();
    history.push(`/users/${userId}/attending`)
  }

  return (
    <main>
      <div className="mainCard">
        <div className="eventButtons">
          <CreateEventModal />
          <CreateEventModal />
        </div>
        <p>Events</p>
        <button onClick={myEvents}>See all your events</button>
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
