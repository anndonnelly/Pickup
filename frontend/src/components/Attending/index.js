import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyAttendingEvents } from "../../store/event";
import { useParams } from "react-router";
import { EventCard } from "../EventPage/EventCard";


function AttendingEvent() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const events = useSelector(state => state.event.attending)
  //keying into slice of state

  useEffect(() => {
    dispatch(getMyAttendingEvents(userId));
  }, [dispatch]);

  return ( 
    <div>  {events.map((event) =>
        <EventCard {...event} key={event.id}/>)}
    </div>
)}
    
export default AttendingEvent;
