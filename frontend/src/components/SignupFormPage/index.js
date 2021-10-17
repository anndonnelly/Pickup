import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [credential, setCredential] = useState("");

  if (sessionUser) return <Redirect to="/events" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

    const demoLogin = async (e) => {
      e.preventDefault();
      setCredential("Demo-lition");
      setPassword("password");
      const demo = dispatch(
        sessionActions.login({ credential: "Demo-lition", password: "password" })
      );
      history.push("/events");
      return demo;
    };

  return (
    <div className="signupDiv">
      <div className="signupLeftDiv">
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="signupField">
            <label>Email </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signupField">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="signupField">
            <label>Password </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="signupField">
            <label>Confirm Password </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="signupField">
            <button type="submit">Sign Up</button>
          </div>
          <div>
            <p className="AlreadyAMemberContainer">
              Already a member?
              <Link to="/" className="AlreadyAMember">
                {" "}
                Log in
              </Link>
              . /{""}
              <button className="demoButton" onClick={demoLogin}>
                Demo User
              </button>{" "}
            </p>
          </div>
        </form>
      </div>
      <div className="signupRightDiv"></div>
    </div>
  );
}
export default SignupFormPage;


//TODO get modal to pop up on AlreadyAMember link