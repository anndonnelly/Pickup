
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/event";
import CreateEventModal from "../CreateEventModal";

const EventPage = () => {
  const dispatch = useDispatch()

  const events = useSelector(state => {
    return state.event.list.map(eventId=> eventId.name)
  })


useEffect(()=> {
  dispatch(getEvents())
}, [dispatch])

if(!events){
  return null
}

  return (
    <main>
      <ul className="event-list">
        {events.map((event) => (
          <li>{`${event}`}</li>
        ))}
      </ul>
      <CreateEventModal />
    </main>
  );
};

export default EventPage;

