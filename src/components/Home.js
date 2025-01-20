import React,{useEffect} from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    AOS.init({
        duration: 1200,
        offset: 200,
        once: true,
      });

      
  return (
    <>
      <header className="header-container">
        <div className="left-arrow" ></div>
        <div className="alien-data">
          <center>
            <div className="tooltip" >
              Click here to see sharif's transformations
            </div>
            <img src="./images/sharif.png" alt="alien image" data-aos='zoom-in'/>
          </center>
        </div>
        <div className="right-arrow"></div>
      </header>
    </>
  );
}
