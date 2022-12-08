import "./About.css";
import portrait from "../../img/iconImage_small.jpeg";

export function About() {
  return (
    <div className="container container-about">
      <div className="about-row">
        <div className="about-left">
          <span className="purple-text name">
            I'm Mel (she/they).
          </span>
          <p className="gray-text">
            Currently a university student studying Computer Science. Always learning
            new things from extraordinary people.
          </p>
        </div>
        <div className="about-right">
          <img src={portrait} alt="portrait"/>
        </div>
      </div>
    </div>
  );
}