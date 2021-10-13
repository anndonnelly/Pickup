import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAttendingEvents } from "../../store/event";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { EventCard } from "../EventPage/EventCard";


function AttendingEvent() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const events = useSelector(state => state.event.attending)
  console.log(events)
  //keying into slice of state

  useEffect(() => {
    dispatch(getMyAttendingEvents(userId));
  }, [dispatch]);

  return (
    <div className="mainCard">
      <EventCard />
    </div>
  );
}

export default AttendingEvent;
