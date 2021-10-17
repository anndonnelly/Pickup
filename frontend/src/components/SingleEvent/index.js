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
  const alreadyAttending = useSelector((state) => {
    return state.event.rsvps[eventId]?.some(
      (rsvp) =>
        rsvp.eventId === +eventId && state.session.user.id === rsvp.userId
    );
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
    if (alreadyAttending) {
      alert("Your are already attending this event");
      return;
    }
    const payload = {
      eventId,
      userId,
    };

    let createdRSVP = await dispatch(createAttendingEvent(payload, userId));
    if (createdRSVP) {
      history.push(`/users/${userId}/my-events`);
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
          Click to Attend
        </button>
      </div>
      <div className="mainCard">
        <EventCard {...event} isEditEnabled />
      </div>
    </>
  );
};

export default OneEvent;
