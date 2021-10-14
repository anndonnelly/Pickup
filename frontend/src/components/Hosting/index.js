import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventCard } from "../EventPage/EventCard";
import { useParams } from "react-router";
import { getMyHostedEvents } from "../../store/event";

function HostingEvent() {
    const dispatch = useDispatch();
    const { userId } = useParams();

  const events = useSelector(state => state?.event?.hosting?.Events)
  console.log("************", events)

  useEffect(() => {
    dispatch(getMyHostedEvents(userId));
  }, [dispatch]);

  return ( 
    <div>  {events.map((event) =>
        <EventCard {...event} key={event.id}/>)}
    </div>
)}


export default HostingEvent;

