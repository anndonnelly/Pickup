import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getMyAttendingEvents, getMyHostedEvents } from "../../store/event";
import "./MyEvents.css"
import { useState } from "react";
// import { useParams } from "react-router";


function MyEvents() {
  const history = useHistory();
  const userId = useSelector(state => state.session?.user.id);
  const dispatch = useDispatch();

  const [clickedAttending, setClickedAtteding] = useState(true)
  const [clickedHosting, setClickedHosting] = useState(false);

  useEffect(() => {
    dispatch(getMyAttendingEvents(userId));
    dispatch(getMyHostedEvents(userId));
  }, [dispatch]);

  const underLineAttending = () => {

    const element1 = document.querySelector(".attendingTab");
    const element2 = document.querySelector(".hostingTab");
    element2.classList.remove("hostingTabOnClick");
    element1.classList.add("attendingTabOnClick")
    
  }

  const underLineHosting = () => {
    const element1 = document.querySelector(".attendingTab");
    const element2 = document.querySelector(".hostingTab");
    element1.classList.remove("attendingTabOnClick");
    element2.classList.add("hostingTabOnClick")
    
    
  }

  return (
    <>
      <div className="tabs">
        <NavLink
          className={clickedAttending ? "attendingTabOnClick" : "attendingTab"}
          to={`/users/${userId}/attending`}
          onClick={() => {
            if (clickedAttending) {
              return;
            } else {
              setClickedAtteding(false);
            }
          }}
        >
          Attending
        </NavLink>
        <NavLink
          className={clickedHosting ? "hostingTabOnClick" : "hostingTab"}
          to={`/users/${userId}/hosting`}
          onClick={() => {
            if (!clickedHosting) {
              setClickedHosting(true);
              setClickedAtteding(false);
            } else {
               setClickedHosting(true);
            }
          }}
        >
          Hosting
        </NavLink>
      </div>
    </>
  );
}

export default MyEvents;
