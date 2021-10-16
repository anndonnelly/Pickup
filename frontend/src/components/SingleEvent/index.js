import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneEvent } from "../../store/event";
import { getLocations } from "../../store/event";
import { EventCard } from "../EventPage/EventCard";
import { createAttendingEvent } from "../../store/event";
import { useHistory } from "react-router-dom";
// import "./SingeEvent.css";

const OneEvent = () => {
  const { eventId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const event = useSelector((state) => {
    return state.event.list[eventId] ?? {};
  });

  const userId = useSelector((state) => state.session?.user?.id);

  //  const location = useSelector((state) => {
  //    return state.event.list[locationId];
  //  });
  useEffect(() => {
    dispatch(getOneEvent(eventId));
    dispatch(getLocations());
    // dispatch(createAttendingEvent())
  }, [dispatch, eventId]);
  //  const location = getLocations.find(event.locationId === location.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventId,
      userId,
    };
    let createdRSVP = await dispatch(createAttendingEvent(payload, eventId));
    if (createdRSVP) {
      history.push(`/users/${userId}/attending`);
    }
  };

  return (
    <>
      <div className="buttonPosition">
        <button
          className="getBackToEventsPage my-event-buttons"
          onClick={() => history.push("/events")}
        >
          All Events
        </button>
        <button className="attendButton" onClick={handleSubmit}>
          Attend
        </button>
      </div>
      <div className="mainCard">
        <EventCard {...event} isEditEnabled />
      </div>
    </>
  );
};

export default OneEvent;
