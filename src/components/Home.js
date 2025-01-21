import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import AOS from "aos";
import transformSound from "../audio/transform.mp3";
import "aos/dist/aos.css";

export default function Home() {
  const [glow, setGlow] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  AOS.init({
    duration: 1200,
    offset: 200,
    once: true,
  });

  const handleTransform = async()=> {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play(); 
    }
    setTimeout(1000)
    setGlow(true);
    setTimeout(() => {
      setGlow(false);
      navigate("/transformations"); 
    }, 2000);
  };

  return (
    <>
      <audio ref={audioRef} src={transformSound} preload="auto"></audio>
      <div className={`screen ${glow ? "glow" : ""}`}></div>
      <header className="header-container">
        <div className="left-arrow"></div>
        <div className="alien-data">
          <center>
            <div className="tooltip">
              Click here to see sharif's transformations
            </div>
            <button onClick={handleTransform}>
              <img src="./images/sharif.png" alt="alien image" data-aos="zoom-in" />
            </button>
          </center>
        </div>
        <div className="right-arrow"></div>
      </header>
    </>
  );
}
