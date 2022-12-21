import "./intro.scss"

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,{ 
      showCursor: false, 
      backDelay: 1500,
      backSpeed: 60, 
      strings: ['React.js', 'JavaScript', 'SCSS', 'Bootstrap' ] 
    });
  });
  return (
    <div className="intro" id="intro">

      <div className="left">
        <div className="imgContainer">
          <img src="assets/IMG_3116.PNG" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello World, I'm</h2>
          <h1>Mohammed Husain Segval</h1>
          <h3>Front-end Developer <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio"> <ArrowDownwardIcon /></a>
      </div>
    </div>
  )
}

export default Intro 