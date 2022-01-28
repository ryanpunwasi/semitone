import React from 'react';
import './InterfaceButton.css';

class InterfaceButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isPlaying: false }
  }

  componentDidMount() {
    // if(this.props.mode === 'octaves' || this.props.mode === 'notes'){
    //   document.addEventListener('keyup', (event) => {
       
    //     if(event.key === " ") {
    //       setTimeout(this.playNote(), 1000);  
    //     }
    //   });
    // } else if(this.props.mode === 'chords') {
    //   document.addEventListener('keyup', (event) => {
    //     if(event.key === " ") {
    //       this.playChord();
    //     }
    //   });
    // }

    // if(this.props.autoplay) {
    //   setTimeout(() => {
    //     this.props.chord ? this.playChord(): this.playNote();
    //   }, 500)
      
    // }
  }
  
  componentWillUnmount() {
    if(this.state.isPlaying) {
      if(this.props.note) {
        this.props.note.pause();
      } else {
        this.props.chord.root.pause()
        this.props.chord.third.pause()
        this.props.chord.fifth.pause()
      }
    }
  }

  playNote = () => {
    if(this.props.mode === 'scales') {
      let audio = document.getElementById('audio');
      audio.play()
    } else {
      if(this.state.isPlaying) {
        this.props.note.load();
      }
  
      this.props.note.onended = () => {
        this.setState({ isPlaying: false});
      }
      
      this.setState({ isPlaying: true });
     
      this.props.note.play();    
    }
    
  }

  playChord = () => {

    let root = this.props.chord.root;
    let third = this.props.chord.third;
    let fifth = this.props.chord.fifth;

    root.onended = () => {
      if(third.ended && fifth.ended) {
        this.setState({ isPlaying: false });
      }
    }

    third.onended = () => {
      if(root.ended && fifth.ended) {
        this.setState({ isPlaying: false });
      }
    }
    fifth.onended = () => {
      if(third.ended && root.ended) {
        this.setState({ isPlaying: false });
      }
    }

    root.preload = 'auto';
    third.preload = 'auto';
    fifth.preload = 'auto';

    root.load();
    third.load();
    fifth.load();
  
    this.setState({ isPlaying: true });

    root.play();
    third.play();
    fifth.play(); 
  }

  // RENDERING FUNCTIONS/METHODS

  renderSymbol = () => {
    if(this.props.flat) {
      return <span><sup>♭</sup></span>;
    }

    if(this.props.sharp) {
      return <span><sup>♯</sup></span>;
    }
  }

  renderAudioIcon = () => {
    if(this.props.play) {
      return <span><i className="bi bi-play-fill"></i></span>;
    }
  }

  renderOctave = () => {
    return <span><sub>{this.props.octave}</sub></span>;
  }
  
  renderChordNotation = () => {
    const chordtype = this.props.chordtype === 'major' ? 'M' 
    : this.props.chordtype === 'minor' ? 'm' 
    : null;

    return <span><sub>{chordtype}</sub></span>;
  }

  renderStop = () => {
    return <span><i className="bi bi-stop-fill"></i></span>;
  }

  renderDisabled = () => {
    const disabled = this.props.isPlaying ? {class: 'interface-disabled', disabled: true} : {class: '', disabled: false };
    return disabled;
  }

  renderHtmlAudioTag = () => {
    if(this.props.mode === 'scales') {
      return <audio id='audio' src={this.props.soundFile}></audio>;
    }
  }

  render() {
    return (
      <div>
        <button id="interfaceButton" className={`mb-3 button interface-button ${this.renderDisabled().class} interface-${this.props.color}`} onClick={this.props.chord ? this.playChord: this.playNote} disabled={this.renderDisabled().disabled}>
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