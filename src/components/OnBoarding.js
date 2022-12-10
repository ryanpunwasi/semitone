import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import TrumpetAnimation from "./TrumpetAnimation";

const OnBoarding = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col mt-4 mb-4">
            <div className="d-flex">
              <Link to="/">
                <Button text="← Home" color="outline" />
              </Link>
            </div>

            <TrumpetAnimation />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mx-auto mallanna mb-3">
            <p>
              Hello there and welcome! The goal of this application is to hone
              your ability to distinguish between various pitches. To begin,
              select any one of the training modes below.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3 mx-auto">
            <Link className="d-inline" to="/notes">
              <Button color="blue" text="Notes" wide />
            </Link>
            <Link className="d-inline" to="/noteinfo">
              <Button color="outline" text="What's a note?" wide />
            </Link>
          </div>
          <div className="col-3 mx-auto">
            <Link className="d-inline" to="/octaves">
              <Button color="purple" text="Octaves" wide />
            </Link>
            <Link className="d-inline" to="/octaveinfo">
              <Button color="outline" text="What's an octave?" wide />
            </Link>
          </div>
          <div className="col-3 mx-auto">
            <Link className="d-inline" to="/scales/">
              <Button color="wintermint" text="Scales" wide />
            </Link>
            <Link className="d-inline" to="/scaleinfo">
              <Button color="outline" text="What's a scale?" wide />
            </Link>
          </div>
          <div className="col-3 mx-auto">
            <Link className="d-inline" to="/chords">
              <Button color="pink" text="Chords" wide />
            </Link>
            <Link className="d-inline" to="/chordinfo">
              <Button color="outline" text="What's a chord?" wide />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OnBoarding;
