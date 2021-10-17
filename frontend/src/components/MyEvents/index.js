import React from "react";
// import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMyAttendingEvents, getMyHostedEvents } from "../../store/event";
import { EventCard } from "../EventPage/EventCard";
import "./MyEvents.css";
// import { getLocations } from "../../store/event";
import { deleteAttendingEvent } from "../../store/event";
// import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

function MyEvents() {
  const userId = useSelector((state) => state.session?.user.id);
  const [tabState, setTabState] = useState("attending");
  const dispatch = useDispatch();
  const events = useSelector((state) => state?.event);
  const history = useHistory();

  const [counter, setCounter] = useState(0);
  // Dzan addition

  useEffect(() => {
    tabState === "attending" && dispatch(getMyAttendingEvents(userId));
    tabState === "hosting" && dispatch(getMyHostedEvents(userId));
    // dispatch(getLocations());
  }, [tabState, counter]);

  const handleDelete = (event) => {
    const eventId = event.target.value;
    setCounter((prev) => prev + 1);
    dispatch(deleteAttendingEvent(userId, eventId));
    dispatch(getMyAttendingEvents(userId));
  };

  return (
    <>
      <div className="AllEventsContainer">
        <button
          className="my-events-button"
          onClick={() => history.push("/events")}
        >
          All Events
        </button>
      </div>
      <div className="MyEventPosition">
        <div>
          <h2 className="title">My Events</h2>
        </div>
        <div className="tabs">
          <button
            className={tabState === "attending" && "active"}
            onClick={() => setTabState("attending")}
          >
            Attending
          </button>
          <button
            className={tabState === "hosting" && "active"}
            onClick={() => setTabState("hosting")}
          >
            Hosting
          </button>
        </div>
      </div>
      <div className="myEventsPage">
        {events?.[tabState]?.map((event) => (
          <div>
            <EventCard key={event.id} {...event} isEditEnabled />
            {tabState === "attending" && (
              <button
                className="cancelButtonRsvp"
                value={event.id}
                onClick={handleDelete}
              >
                Cancel RSVP
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MyEvents;
