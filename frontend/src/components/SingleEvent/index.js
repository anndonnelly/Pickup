import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneEvent } from "../../store/event";
import { getLocations } from "../../store/event";
import { EventCard } from "../EventPage/EventCard";
import { createAttendingEvent } from "../../store/event";
import { useHistory } from "react-router";
import "./SingeEvent.css";

const OneEvent = () => {
  const { eventId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const event = useSelector((state) => {
    return state.event.list[eventId] ?? {};
  });

  const userId = useSelector(state => state.session?.user?.id)

  //  const location = useSelector((state) => {
  //    return state.event.list[locationId];
  //  });
  useEffect(() => {
    dispatch(getOneEvent(eventId));
    dispatch(getLocations());
    // dispatch(createAttendingEvent())
  }, [dispatch, eventId]);
  //  const location = getLocations.find(event.locationId === location.id);

  const handleSubmit = async(e) => {
    e.preventDefault()
    const payload = { 
      eventId,
      userId

    }
    let createdRSVP = await dispatch(createAttendingEvent(payload, eventId))
    if (createdRSVP){
      history.push(`/users/${userId}/attending`)
    }
  }

  return (
    <>
      <div className="mainCard">
        <EventCard {...event} isEditEnable />
      </div>
      <button className="attendButton"onClick={handleSubmit}>
        Attend
      </button>
    </>
  );
};

export default OneEvent;
