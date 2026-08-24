import "./about.css";

import AboutHistory from "./AboutCards/AboutHistory";
import AboutInfo from "./AboutCards/AboutInfo";
import Map from "./Map";

function About() {
  return (
    <div className="about centralize" id="about">
      <h2 className="heading">Մեր Մասին</h2>

      <div className="aboutCards">
        <AboutHistory />
        <AboutInfo />
      </div>

      <Map />
    </div>
  );
}

export default About;
