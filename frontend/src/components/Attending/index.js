import React from "react";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAttendingEvents } from "../../store/event";
import { useParams } from "react-router";
import { EventCard } from "../EventPage/EventCard";
import MyEvents from "../MyEvents";
import { deleteAttendingEvent } from "../../store/event";


function AttendingEvent() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [counter, setCounter] = useState(0);
  // Dzan addition
  
  const events = useSelector(state => state.event.attending)
  //keying into slice of state

  useEffect(() => {
    dispatch(getMyAttendingEvents(userId));
  }, [dispatch, counter]);
  
  const handleDelete = (event) => {
    const eventId = event.target.value
    setCounter(prev => prev + 1)
    dispatch(deleteAttendingEvent(userId, eventId));
    dispatch(getMyAttendingEvents(userId));
  };
  return (
    <>
      <MyEvents />
      <div>
        {" "}
        {events.map((event) => (
          <div>
            <EventCard {...event} key={event.id} />
            <button value={event.id}onClick={handleDelete}>Cancel RSVP</button>
          </div>
        ))}
      </div>
    </>
  );}
    
export default AttendingEvent;
