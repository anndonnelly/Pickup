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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
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
          <Route exact path="/events">
            <EventPage />
          </Route>
          <Route path="/events/:eventId">
            <OneEvent />
          </Route>
        </Switch>
      )}
      <Footer />
    </div>
  );
}

export default App;
