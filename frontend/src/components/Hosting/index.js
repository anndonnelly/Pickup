import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventCard } from "../EventPage/EventCard";
import { useParams } from "react-router";
import { getMyHostedEvents } from "../../store/event";
import MyEvents from "../MyEvents";

function HostingEvent() {
    const dispatch = useDispatch();
    const { userId } = useParams();

  const events = useSelector(state => state?.event?.hosting?.Events)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getMyHostedEvents(userId)).then(() => setLoading(true));
  }, [dispatch]);
    return (
      <>
        <MyEvents />
          <div>
            {events?.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
      </>
    );
}

export default HostingEvent;

