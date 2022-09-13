import React from "react";
import anime from "animejs";

import Image from "../assets/img/051-trumpet-cropped.svg";

class TrumpetAnimation extends React.Component {
  componentDidMount() {
    anime({
      targets: "#trumpetAnimation",
      keyframes: [
        { value: 100, scale: 1.1 },
        { value: 105, rotate: -10 },
        { value: 110, translateX: 5 },
        { value: 115, translateX: 0 },
        { value: 120, translateX: -5 },
        { value: 125, translateX: 5 },
        { value: 130, translateX: 0 },
        { value: 135, translateX: -5 },
        { value: 140, translateX: 0 },
        { value: 220, rotate: 0.5 },
        { value: 235, scale: 1 },
      ],
      duration: 700,
      easing: "linear",
      delay: 2000,
      loop: true,
    });
  }

  render() {
    return (
      <section id="animation">
        <div className="container">
          <div className="row">
            <div className=" col-sm-4 offset-sm-4 col-md-4 offset-md-4 mb-4 mt-2 mx-auto">
              <div>
                <img
                  id="trumpetAnimation"
                  className="d-inline-block mx-auto mt-0"
                  src={Image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrumpetAnimation;
