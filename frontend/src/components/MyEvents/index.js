import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMyAttendingEvents, getMyHostedEvents } from "../../store/event";
import { EventCard } from "../EventPage/EventCard";
import "./MyEvents.css";
// import { useParams } from "react-router";

function MyEvents() {
  const userId = useSelector((state) => state.session?.user.id);
  const [tabState, setTabState] = useState("attending");
  const dispatch = useDispatch();
  const events = useSelector((state) => state?.event);

  useEffect(() => {
    tabState === "attending" && dispatch(getMyAttendingEvents(userId));
    tabState === "hosting" && dispatch(getMyHostedEvents(userId));
  }, [tabState]);

  // const underLineAttending = () => {
  //   const element1 = document.querySelector(".attendingTab");
  //   const element2 = document.querySelector(".hostingTab");
  //   element2.classList.remove("hostingTabOnClick");
  //   element1.classList.add("attendingTabOnClick")
  // }

  // const underLineHosting = () => {
  //   const element1 = document.querySelector(".attendingTab");
  //   const element2 = document.querySelector(".hostingTab");
  //   element1.classList.remove("attendingTabOnClick");
  //   element2.classList.add("hostingTabOnClick")
  // }

  return (
    <>
      <div>
        <h2>My Events</h2>
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
      <div className="myEventsPage">
        {tabState === "attending" &&
          events?.[tabState]?.map((event) => (
            <EventCard key={event.id} {...event} isEditEnabled />
          ))}

        {events?.[tabState]?.Events?.map((event) => (
          <EventCard key={event.id} {...event} isEditEnabled />
        ))}
      </div>
    </>
  );
}

export default MyEvents;

//  return (
//     <>
//       <div className="tabs">
//         <NavLink
//           className={clickedAttending ? "attendingTabOnClick" : "attendingTab"}
//           to={`/users/${userId}/attending`}
//           onClick={() => {
//             if (clickedAttending) {
//               return;
//             } else {
//               setClickedAttending(false);
//             }
//           }}
//         >
//           Attending
//         </NavLink>
//         <NavLink
//           className={clickedHosting ? "hostingTabOnClick" : "hostingTab"}
//           to={`/users/${userId}/hosting`}
//           onClick={() => {
//             if (!clickedHosting) {
//               setClickedHosting(true);
//               setClickedAttending(false);
//               return;
//             } else {
//               setClickedHosting(true);
//             }
//           }}
//         >
//           Hosting
//         </NavLink>
//       </div>
//     </>
//   );
// }

// export default MyEvents;
