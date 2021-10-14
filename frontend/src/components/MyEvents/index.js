import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getMyAttendingEvents, getMyHostedEvents } from "../../store/event";

// import { useParams } from "react-router";


function MyEvents() {
  const history = useHistory();
  const userId = useSelector(state => state.session?.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyAttendingEvents(userId));
    dispatch(getMyHostedEvents(userId));
  }, [dispatch]);


  return (
    <>
      <NavLink to={`/users/${userId}/attending`}>Attending</NavLink>
      <NavLink to={`/users/${userId}/hosting`}>Hosting</NavLink>

    </>
  );
}

export default MyEvents;
