import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { validate as uuidValidate } from 'uuid';
import cookie from 'cookie';

import history from '../history';
import './App.css';

import Header from './Header';
import Home from './Home';
import Octave from './Octave';
import OctaveInfo from './OctaveInfo';
import ScaleInfo from './ScaleInfo';
import ScaleList from './ScaleList';
import ChordInfo from './ChordInfo';
import ChordList from './ChordList';
import OnBoarding from './OnBoarding';
import Notes from './Notes';
import NoteInfo from './NoteInfo';
import Practice from './Practice';
import Score from './Score';
import Credits from './Credits';

class App extends React.Component {

  createIdCookie() {
    document.cookie = `id=${uuidv4()}`;
  }

  getIdFromCookie() {
    return cookie.parse(document.cookie).id;
  }
  
  componentDidMount(){
    const id = this.getIdFromCookie();
    if(!uuidValidate(id)){
      this.createIdCookie();
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/octaveinfo' exact component={OctaveInfo} />
            <Route path='/octaves' exact component={Octave} />
            <Route path='/octaves/practice' exact component={Practice} />
            <Route path='/scales/' exact component={ScaleList} />
            <Route path='/scales/practice' exact component={Practice} />
            <Route path='/noteinfo' exact component={NoteInfo} />
            <Route path='/notes' exact component={Notes} />
            <Route path='/notes/practice' exact component={Practice} />
            <Route path='/scaleinfo' exact component={ScaleInfo} />
            <Route path='/chords/' exact component={ChordList} />
            <Route path='/chordinfo/' exact component={ChordInfo} />
            <Route path='/chords/practice' exact component={Practice} />
            <Route path='/onboarding' exact component={OnBoarding} />
            <Route path='/score' exact component={Score} />
            <Route path='/credits' exact component={Credits} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;