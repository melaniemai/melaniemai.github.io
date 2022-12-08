import "./App.css";
import { useState } from 'react';

import Mode from "../../components/Mode/Mode";
import Header from '../../components/Header/Header';
import { About } from '../../components/About/About'
import OutlinedTimeline from '../../components/Timeline/Timeline';
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import Footer from "../../components/Footer/Footer";

function Home() {
  const [lightMode, setLightMode] = useState(false);

  const handleModeChange = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={lightMode ? "light-mode" : "dark-mode"}>
      <Mode handleModeChange={handleModeChange} />
      <Header />
      <About />
      <OutlinedTimeline />
      <ProjectCards />
      <Footer />
    </div>
  );
}

export default Home;