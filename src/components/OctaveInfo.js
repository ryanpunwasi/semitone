import { Link } from "react-router-dom";
import { useNoteAudio } from "../hooks/useNoteAudio";
import { getNote } from "../utils/getNote";
import InterfaceButton from "./InterfaceButton";
import Button from "./Button";
import Image from "../assets/img/keyboard_octave.svg";
import ImageTwo from "../assets/img/step2.svg";

const OctaveInfo = () => {
  const notes = useNoteAudio();

  return (
    notes && (
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <Link to="/onboarding">
              <Button text="← Onboarding" color="outline" />
            </Link>
            <Link to="/scaleinfo">
              <Button text="What's a scale? →" color="wintermint" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto col-lg-8 col-md-12">
            <h3 className="text-center mt-4 mb-4 mallanna">
              What is an octave?
            </h3>
            <span className="text-center mt-4 mallanna">
              Formally speaking, an octave is the interval between one musical
              pitch and another with double its frequency{" "}
              <a
                href="https://en.wikipedia.org/wiki/Octave"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
              . To illustrate this, let's look at a keyboard.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-10 offset-sm-1 offset-md-3 mt-5 mx-auto">
            <div>
              <figure>
                <img className="d-inline-block mx-auto" src={ImageTwo} alt="" />
                <figcaption className="text-muted text-center mt-3">
                  The distance between the keys highlighted in blue and red is
                  one semitone. The distance between the keys highlighted in
                  green and purple is one whole tone.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto col-lg-8 col-md-12 mt-5">
            <span className="text-center mallanna">
              The white keys repeat themselves (ascending in pitch) in this
              order: C, D, E, F, G, A, B. The increment between each individual
              note is called a semitone or half-step and the increment between
              two semitones is called a whole tone or a whole step.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5 mx-auto col-sm-10 offset-sm-1">
            <div>
              <figure>
                <img className="d-inline-block mx-auto" src={Image} alt="" />
                <figcaption className="text-muted text-center mt-3">
                  The distance between the highlighted keys is one octave or
                  twelve semitones.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto col-lg-8 col-md-12 mt-5">
            <span className="text-center mallanna">
              The distance between a given letter note and the next
              corresponding letter note is twelve semitones or one octave. Notes
              that are one octave apart sound similar but the higher octave has
              a frequency that is twice as fast, giving it a higher pitch. Have
              a listen to C in three different octaves!
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto d-flex justify-content-center">
            <div className="col-4 mt-5 mx-auto d-flex justify-content-center">
              <div>
                <InterfaceButton
                  text="C"
                  color="outline"
                  octave="2"
                  note={new Audio(getNote(notes, "C", 2).src)}
                />
              </div>
            </div>
            <div className="col-4 mt-5 mx-auto d-flex justify-content-center">
              <div>
                <InterfaceButton
                  text="C"
                  color="outline"
                  octave="3"
                  note={new Audio(getNote(notes, "C", 3).src)}
                />
              </div>
            </div>
            <div className="col-4 mt-5 mx-auto d-flex justify-content-center">
              <div>
                <InterfaceButton
                  text="C"
                  color="outline"
                  octave="4"
                  note={new Audio(getNote(notes, "C", 4).src)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto col-lg-8 col-md-12 mt-5">
            <span className="text-center mallanna">
              Now that you have a solid understanding of octaves, you can
              practice identifying them. Give it a try!
            </span>
          </div>
        </div>
        <div className="row">
          <div className=" mt-5 col-4 col-offset-4 mx-auto mb-5">
            <Link to="/octaves">
              <Button text="Practice" color="green" wide />
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default OctaveInfo;
