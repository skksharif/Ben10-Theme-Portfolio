import React from "react";
import "./TransformationComponent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TransformationComponent() {
  var settings ={
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1268,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1168,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        }
    ]
}
  return (
    <>
      <main>
        <section>
          <div className="powers-heading">
            <h1>My Powers</h1>
          </div>
          <div className="my-powers">
            <div className="power">
              <Slider {...settings}>
                <div className="item">
                  <h3>1</h3>
                </div>
                <div className="item">
                  <h3>2</h3>
                </div>
                <div className="item">
                  <h3>3</h3>
                </div>
                <div className="item">
                  <h3>4</h3>
                </div>
                <div className="item">
                  <h3>5</h3>
                </div>
                <div className="item">
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
