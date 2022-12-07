import { Link } from "react-router-dom";
import { useNoteAudio } from "../hooks/useNoteAudio";
import { getNote } from "../utils/getNote";
import InterfaceButton from "./InterfaceButton";
import Button from "./Button";
import Image from "../assets/img/keyboard-notes.svg";
import ImageTwo from "../assets/img/keyboard-sf.svg";

const NoteInfo = () => {
  const notes = useNoteAudio();
  return (
    notes && (
      <section className="container">
        <div className="row">
          <nav className="d-flex justify-content-between">
            <Link to="/onboarding">
              <Button text="← Onboarding" color="outline" />
            </Link>
            <Link to="/octaveinfo">
              <Button text="What's an octave? →" color="purple" />
            </Link>
          </nav>
        </div>
        <div className="row">
          <div className="mx-auto col-lg-8 col-md-12">
            <header>
              <h3 className="text-center mt-4 mb-4 mallanna">
                What is a note?
              </h3>
            </header>
            <p className="mt-4 mallanna">
              A musical note is a sound with a pitch and a duration. Sound is
              created by vibrations that travel through the air. When those
              vibrations are faster, we hear them as being higher and when
              they're slower, we hear them as being lower. Most music is made up
              of twelve notes. The names of these twelve notes correspond to the
              keys on a piano keyboard.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-10 offset-sm-1 offset-md-3 mt-5 mx-auto">
            <div>
              <figure>
                <img className="d-inline-block mx-auto" src={Image} alt="" />
                <figcaption className="text-muted text-center mt-3">
                  The white keys are named A through G.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto col-lg-8 col-md-12 mt-5 d-inline">
            <p className="mallanna">
              Generally, the white keys can have the following names: A, B, C,
              D, E, F, or G.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5 mx-auto col-sm-10 offset-sm-1">
            <div>
              <figure>
                <img className="d-inline-block mx-auto" src={ImageTwo} alt="" />
                <figcaption className="text-muted text-center mt-3">
                  The names of the black keys correspond to the white keys with
                  the added characteristic of being called sharp or flat.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto col-lg-8 col-md-12 mt-5">
            <p className="mallanna">
              The black keys are named relative to the white keys. A black key
              can be either sharp (♯) or flat (♭), where sharp means higher and
              flat means lower. For example, the black key above F can be called
              F♯. However, that same black key is below G and so it can also be
              called G♭. Listen to the notes below to get an idea of what a
              sharp and flat would sound like.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto d-flex justify-content-center">
            <div className="col-4 mt-5 mx-auto d-flex justify-content-center">
              <div>
                <InterfaceButton
                  text="D"
                  flat
                  color="outline"
                  note={new Audio(getNote(notes, "C", 4, "sharp").src)}
                />
              </div>
            </div>
            <div className="col-4 mt-5 mx-auto d-flex justify-content-center">
              <div>
                <InterfaceButton
                  text="D"
                  color="outline"
                  note={new Audio(getNote(notes, "D", 4).src)}
                />
              </div>
            </div>
            <div className="col-4 mt-5 mx-auto d-flex justify-content-center">
              <div>
                <InterfaceButton
                  text="D"
                  sharp
                  color="outline"
                  note={new Audio(getNote(notes, "E", 4, "flat").src)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto col-lg-8 col-md-12 mt-5">
            <p className="mallanna">
              If you feel ready, let's practice identifying some notes!
            </p>
          </div>
        </div>
        <div className="row">
          <div className=" mt-5 col-4 col-offset-4 mx-auto mb-5">
            <Link to="/notes">
              <Button text="Practice" color="green" wide />
            </Link>
          </div>
        </div>
      </section>
    )
  );
};

export default NoteInfo;
