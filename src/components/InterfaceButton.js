import React from "react";
import "./InterfaceButton.css";

class InterfaceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
    this.ref = React.createRef();
  }

  componentWillUnmount() {
    if (this.state.isPlaying) {
      if (this.props.note) {
        this.props.note.pause();
      } else {
        this.props.chord.root.pause();
        this.props.chord.third.pause();
        this.props.chord.fifth.pause();
      }
    }
  }

  playNote = () => {
    if (this.props.mode === "scales") {
      let audio = document.getElementById("audio");
      audio.play();
    } else {
      if (this.state.isPlaying) {
        this.props.note.load();
      }

      this.props.note.onended = () => {
        this.setState({ isPlaying: false });
      };

      this.setState({ isPlaying: true });

      this.props.note.play();
    }
  };

  playChord = () => {
    let root, third, fifth;
    if (this.props.mode === "chords") {
      root = document.getElementById("chord_root");
      third = document.getElementById("chord_third");
      fifth = document.getElementById("chord_fifth");
    } else {
      console.log(this.props.chord.root);
      root = new Audio(this.props.chord.root.src);
      third = new Audio(this.props.chord.third.src);
      fifth = new Audio(this.props.chord.fifth.src);
    }

    root.onended = () => {
      if (third.ended && fifth.ended) {
        this.setState({ isPlaying: false });
      }
    };

    third.onended = () => {
      if (root.ended && fifth.ended) {
        this.setState({ isPlaying: false });
      }
    };
    fifth.onended = () => {
      if (third.ended && root.ended) {
        this.setState({ isPlaying: false });
      }
    };

    root.preload = "auto";
    third.preload = "auto";
    fifth.preload = "auto";

    root.load();
    third.load();
    fifth.load();

    this.setState({ isPlaying: true });

    root.play();
    third.play();
    fifth.play();
  };

  // RENDERING FUNCTIONS/METHODS

  renderSymbol = () => {
    if (this.props.flat) {
      return (
        <span>
          <sup>♭</sup>
        </span>
      );
    }

    if (this.props.sharp) {
      return (
        <span>
          <sup>♯</sup>
        </span>
      );
    }
  };

  renderAudioIcon = () => {
    if (this.props.play) {
      return (
        <span>
          <i className="bi bi-play-fill"></i>
        </span>
      );
    }
  };

  renderOctave = () => {
    return (
      <span>
        <sub>{this.props.octave}</sub>
      </span>
    );
  };

  renderChordNotation = () => {
    const chordtype =
      this.props.chordtype === "major"
        ? "M"
        : this.props.chordtype === "minor"
        ? "m"
        : null;

    return (
      <span>
        <sub>{chordtype}</sub>
      </span>
    );
  };

  renderStop = () => {
    return (
      <span>
        <i className="bi bi-stop-fill"></i>
      </span>
    );
  };

  renderDisabled = () => {
    const disabled = this.props.isPlaying
      ? { class: "interface-disabled", disabled: true }
      : { class: "", disabled: false };
    return disabled;
  };

  renderHtmlAudioTag = () => {
    if (this.props.mode === "scales") {
      return <audio id="audio" src={this.props.soundFile}></audio>;
    }

    if (this.props.mode === "chords") {
      return (
        <>
          <audio id="chord_root" src={this.props.chord.root}></audio>
          <audio id="chord_third" src={this.props.chord.third}></audio>
          <audio id="chord_fifth" src={this.props.chord.fifth}></audio>
        </>
      );
    }
  };

  render() {
    return (
      <div>
        <button
          className={`mb-3 button interface-button ${
            this.renderDisabled().class
          } interface-${this.props.color}`}
          onClick={this.props.chord ? this.playChord : this.playNote}
          disabled={this.renderDisabled().disabled}
          ref={this.ref}
        >
          {this.renderAudioIcon()}
          {this.renderHtmlAudioTag()}
          {this.props.text}
          {this.renderSymbol()}
          {this.renderOctave()}
          {this.renderChordNotation()}
        </button>
      </div>
    );
  }
}

export default InterfaceButton;
