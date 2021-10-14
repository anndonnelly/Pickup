import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getMyAttendingEvents, getMyHostedEvents } from "../../store/event";
// import { useParams } from "react-router";
// import { EventCard } from "../EventPage/EventCard";

function MyEvents() {
  const history = useHistory();
  const userId = useSelector(state => state.session?.user.id)

  const attending = (e) => {
    e.preventDefault();
    history.push(`/users/${userId}/attending`)
  }
  
  const hosting = (e) => {
    e.preventDefault();
    history.push(`/users/${userId}/hosting`);
  };


  return (
    <>
      <div onClick={attending}>Attending</div>
      <div onClick={hosting}>Hosting</div>
    </>
  );
}

export default MyEvents;
