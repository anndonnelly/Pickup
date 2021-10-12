import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneEvent } from "../../store/event";
import { getLocations } from "../../store/event";
import { EventCard } from "../EventPage/EventCard";
const OneEvent = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const event = useSelector((state) => {
    return state.event.list[eventId] ?? {};
  });

  //  const location = useSelector((state) => {
  //    return state.event.list[locationId];
  //  });
  useEffect(() => {
    dispatch(getOneEvent(eventId));
    dispatch(getLocations());
  }, [dispatch, eventId]);
  //  const location = getLocations.find(event.locationId === location.id);
  //  console.log(location, "jznjabzjabzjab");
  return (
    <>
      <div className="mainCard">
        <EventCard {...event} isEditEnable />
      </div>
    </>
  );
};

export default OneEvent;
