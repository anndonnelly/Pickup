import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";
import { EventCard } from "./EventCard";
const EventPage = () => {
  const dispatch = useDispatch();

  // const events = useSelector((state) => {
  //   return state.event.list;
  // });
  // console.log(eventImages);
  const events = useSelector((state) => {
    return Object.values(state.event.list);
  });

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

        {events?.map((event) => (
          <EventCard {...event} />
        ))}
      </div>
    </main>
  );
};

export default EventPage;
