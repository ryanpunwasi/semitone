import React from "react";
import { Link } from "react-router-dom";
import CheckBox from "./CheckBox";
import Button from "./Button";
import Image from "../assets/img/clarinet.svg";
import HorizontalRule from "./HorizontalRule";
import "./VerticalRule.css";
import Dropdown from "./Dropdown";
import { isValidOctave } from "../utils/isValidOctave.ts";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      octave: "3",
      c: false,
      csharp: false,
      d: false,
      eflat: false,
      e: false,
      f: false,
      fsharp: false,
      g: false,
      aflat: false,
      a: false,
      bflat: false,
      b: false,
      selected: 0,
    };
  }

  renderDisabled = () => {
    if (this.state.selected >= 2 && isValidOctave(this.state.octave)) {
      return false;
    }
    return true;
  };

  handleChange = value => {
    const validStates = ["1", "2", "3", "4", "5"];
    const newState = value.slice(-1);
    if (validStates.includes(newState)) {
      this.setState({ octave: newState });
    }
  };

  handleClick = (key, value) => {
    let selected = this.state.selected;
    if (value) {
      selected = selected + 1;
    } else {
      selected = this.state.selected - 1;
    }

    switch (key) {
      case "c":
        this.setState({ c: value, selected });
        break;
      case "csharp":
        this.setState({ csharp: value, selected });
        break;
      case "d":
        this.setState({ d: value, selected });
        break;
      case "eflat":
        this.setState({ eflat: value, selected });
        break;
      case "e":
        this.setState({ e: value, selected });
        break;
      case "f":
        this.setState({ f: value, selected });
        break;
      case "fsharp":
        this.setState({ fsharp: value, selected });
        break;
      case "g":
        this.setState({ g: value, selected });
        break;
      case "aflat":
        this.setState({ aflat: value, selected });
        break;
      case "a":
        this.setState({ a: value, selected });
        break;
      case "bflat":
        this.setState({ bflat: value, selected });
        break;
      case "b":
        this.setState({ b: value, selected });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <Link to="/onboarding">
              <Button text="← Onboarding" color="outline" />
            </Link>
          </div>
        </div>
        <div className="row mb-5" id="settings">
          <div
            className="col-md-4 col-sm-12 mt-5 border-end border-3 d-flex"
            id="vertical-rule"
          >
            <div className="col-md-6 col-sm-12 mx-auto my-auto align-middle align-items-center justify-content-center">
              <div className="mx-auto">
                <div className="col-md-12 col-sm-4 col-6 mb-5 mx-auto">
                  <img src={Image} alt="Radio" className="d-block mx-auto" />
                </div>
                <h4 className="mb-5 text-center text-muted fw-bolder">
                  Select the notes you'd like to practice!
                </h4>
              </div>
            </div>
          </div>
          <div className="d-sm-block d-block d-md-none d-lg-none">
            <HorizontalRule text="" />
          </div>
          <div className="me-auto col-md-8 col-sm-12 mt-1">
            <div className="d-flex justify-content-center flex-fill">
              <p className="mb-5 mx-auto text-center text-muted h4 fw-bolder"></p>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <Dropdown
                options={[
                  "Octave 1",
                  "Octave 2",
                  "Octave 3",
                  "Octave 4",
                  "Octave 5",
                ]}
                selected="Octave 3"
                handleChange={this.handleChange}
              />
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <CheckBox
                text="C"
                color="transparent"
                value="c"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="C♯"
                color="transparent"
                value="csharp"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="D"
                color="transparent"
                value="d"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="E♭"
                color="transparent"
                value="eflat"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="E"
                color="transparent"
                value="e"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="F"
                color="transparent"
                value="f"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="F♯"
                color="transparent"
                value="fsharp"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="G"
                color="transparent"
                value="g"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="A♭"
                color="transparent"
                value="aflat"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="A"
                color="transparent"
                value="a"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="B♭"
                color="transparent"
                value="bflat"
                handleClick={this.handleClick}
              />
              <CheckBox
                text="B"
                color="transparent"
                value="b"
                handleClick={this.handleClick}
              />
            </div>
            <div className="d-flex justify-content-center ms-4 mb-5">
              <Button
                color="blue"
                text="Start"
                wide
                submit={this.state}
                modality="notes"
                disabled={this.renderDisabled()}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
