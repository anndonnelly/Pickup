import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Footer } from "./components/Navigation/Footer";
import { SplashPage } from "./components/SplashPage/SplashPage";
import EventPage from "./components/EventPage";
import OneEvent from "./components/SingleEvent";
// import AttendingEvent from "./components/Attending";
// import HostingEvent from "./components/Hosting";
// import HomePage from "./components/HomePage";
import MyEvents from "./components/MyEvents";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAttending, setAttending] = useState(true);
  const [isHosting, setHosting] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className="pageDiv">
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route path="/home">
            <HomePage />
          </Route> */}
          <Route exact path="/events">
            <EventPage />
          </Route>
          <Route path="/events/:eventId">
            <OneEvent />
          </Route>
          <Route path="/users/:userId/my-events">
            <MyEvents />
          </Route>
          {/* <Route path="/users/:userId/hosting">
            <HostingEvent /> */}
          {/* </Route>  */}
        </Switch>
      )}
      <Footer />
    </div>
  );
}

export default App;
