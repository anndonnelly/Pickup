import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";
import { EventCard } from "./EventCard";


const EventPage = () => {
  const dispatch = useDispatch();

  const events = useSelector((state) => {
    return Object.values(state.event.list);
  });

  // console.log("xhbjsbxjsbxjs",events)




  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (!events) {
    return null;
  }

  return (
    <main>
      <div className="mainCard">
        <div className="eventButtons">
          <CreateEventModal />
          <CreateEventModal />
        </div>
        <p>Events</p>
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
