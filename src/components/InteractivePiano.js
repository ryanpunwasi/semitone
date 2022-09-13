import React from "react";
import anime from "animejs";
import { connect } from "react-redux";

import { playInteractivePianoNote } from "../actions";
import "./InteractivePiano.css";
import Image from "../assets/img/keyboard-cropped.svg";
import LTheme from "../scales/ltheme";
import FurElise from "../scales/furelise";
import AngelBeats from "../scales/angelbeats";
import Mario from "../scales/mario";

const InteractivePiano = props => {
  const animate = () => {
    if (props.scale === "L's Theme") {
      let audio = new Audio(LTheme[props.currentNote]);
      audio.load();
      audio.play();
    } else if (props.scale === "Fur Elise") {
      let audio = new Audio(FurElise[props.currentNote]);
      audio.load();
      audio.play();
    } else if (props.scale === "Angel Beats") {
      let audio = new Audio(AngelBeats[props.currentNote]);
      audio.load();
      audio.play();
    } else if (props.scale === "Mario") {
      let audio = new Audio(Mario[props.currentNote]);
      audio.load();
      audio.play();
    }

    props.playInteractivePianoNote();
    anime({
      targets: "#interactivePiano",
      keyframes: [
        { translateX: 2 },
        { translateX: -2 },
        { translateX: 2 },
        { translateX: 0 },
      ],
      duration: 200,
      easing: "linear",
      delay: 0,
    });
  };

  return (
    <section id="animation">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-md-3 mx-auto">
            <div id="piano" onClick={animate}>
              <img
                id="interactivePiano"
                className="d-inline-block mx-auto"
                src={Image}
                alt="piano"
                title={props.scale}
              />
              <audio id="audio" src=""></audio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    currentNote: state.interactivepiano.currentNote,
    scale: state.interactivepiano.scale,
  };
};

export default connect(mapStateToProps, { playInteractivePianoNote })(
  InteractivePiano
);
