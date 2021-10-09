import image1 from "../../images/sportsIconsTranspo.png";
export const Section1 = () => {
  return (
    <div className="marginDiv">
      <div className="sectionDiv">
        <div className="leftDiv">
          <h1>Dive in! There are so many things to do on Meetup</h1>
          <p>
            Join a group to meet people, make friends, find support, grow a
            business, and explore your interests. Thousands of events are
            happening every day, both online and in person!
          </p>
        </div>
        <div className="rightDiv">
          <img src={image1} className="section1image" alt="Unable to load" />
        </div>
      </div>
    </div>
  );
};
