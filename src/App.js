import React from "react";

import "./App.scss";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/work/Work";
import Menu from "./components/menu/Menu";

function App() {
  //menu state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  //function to toggle menu
  function menuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="App">
      <Topbar isOpen={isMenuOpen} handleClick={menuToggle} />
      <Menu isOpen={isMenuOpen} handleClick={menuToggle} />

      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
