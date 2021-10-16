import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getMyAttendingEvents, getMyHostedEvents } from "../../store/event";
import "./MyEvents.css"

// import { useParams } from "react-router";


function MyEvents() {
  const history = useHistory();
  const userId = useSelector(state => state.session?.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyAttendingEvents(userId));
    dispatch(getMyHostedEvents(userId));
  }, [dispatch]);

  const underLineAttending = () => {
    const element = document.getElementsByClassName("attendingTab");
    element.className.remove("hostingTabOnClick");
    element.className.add("attendingTabOnClick")
    
  }

  const underLineHosting = () => {
    const element = document.getElementsByClassName("hostingTab");
    element.className.remove("attendingTabOnClick");
    element.className.add("hostingTabOnClick")
    
    
  }

  return (
    <>
      <div className="tabs">
        <NavLink
          className="attendingTab"
          to={`/users/${userId}/attending`}
          onClick={underLineAttending}
        >
          Attending
        </NavLink>
        <NavLink
          className="hostingTab"
          to={`/users/${userId}/hosting`}
          onClick={underLineHosting}
        >
          Hosting
        </NavLink>
      </div>
    </>
  );
}

export default MyEvents;
