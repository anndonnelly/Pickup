import "./HomePage.css";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();

  
  


  return (
    <>
      <div className="homePage">
        <div>
          <button onClick={() => history.push("./events")}>
            Discover Events
          </button>
          <lable>Find your next event:</lable>
          <input type="input"></input>
        </div>
      </div>
    </>
  );
};

export default HomePage;
