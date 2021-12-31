import React from 'react';
import { Link } from 'react-router-dom';

import InterfaceButton from './InterfaceButton';
import Button from './Button';

import Image from '../assets/img/majorchord.svg';
import ImageTwo from '../assets/img/minorchord.svg';
import C from '../assets/octave-3/C.mp3';
import E from '../assets/octave-3/E.mp3';
import EFlat from '../assets/octave-3/Eflat.mp3';
import G from '../assets/octave-3/G.mp3';

const ChordInfo = () => {
  const cmajor = {
    root: new Audio(C),
    third: new Audio(E), 
    fifth: new Audio(G)
  };

  const cminor = {
    root: new Audio(C),
    third: new Audio(EFlat), 
    fifth: new Audio(G)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          <Link to='/onboarding'>
            <Button text="← Onboarding" color='outline'/>
          </Link>
          <Link to='/noteinfo'>
            <Button text="What's a note? →" color='blue'/>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="mx-auto col-lg-8 col-md-12">
          <h3 className='text-center mt-4 mb-4 mallanna'>What is a chord?</h3>
            <span className='text-center mt-4 mallanna'>A chord is a set of notes played simultaneously <a href="https://en.wikipedia.org/wiki/Chord_(music)" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>. A well-known type of chord is a triad, which consists of three notes: the root (which has the lowest pitch), the third, and the fifth (which has the highest pitch). The two types of triads that we will focus on are major and minor triads. In a major chord <a href="https://en.wikipedia.org/wiki/Major_chord" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>, the distance between the root and the third is four semitones. The distance between the third and the fifth is three semitones.</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-sm-10 offset-sm-1 offset-md-3 mt-5 mx-auto'>
          <div>
            <figure>
              <img className='d-inline-block mx-auto' src={Image} alt=''/>
              <figcaption className='text-muted text-center mt-3'>C Major Chord — C is the root, E is the third, and G is the fifth.</figcaption>
            </figure>
          </div>
        </div> 
      </div>
      <div className="row">
        <div className="mx-auto col-lg-8 col-md-12 mt-5">
          <span className='text-center mallanna'>In a minor chord <a href="https://en.wikipedia.org/wiki/Minor_chord" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>, the distance between the root and the third is three semitones. The distance between the third and the fifth is four semitones.</span>
        </div>
      </div>      
      <div className='row'>
        <div className='col-md-6 offset-md-3 mt-5 mx-auto col-sm-10 offset-sm-1'>
          <div>
            <figure>
              <img className='d-inline-block mx-auto' src={ImageTwo} alt=''/>
              <figcaption className='text-muted text-center mt-3'>C Minor Chord — C is the root, E♭ is the third, and G is the fifth.</figcaption>
              </figure>
          </div>
        </div> 
      </div>
      <div className="row">
        <div className="mx-auto col-lg-8 col-md-12 mt-5">
          <span className='text-center mallanna'>Major and minor triads belong to the scale<Link to="./scaleinfo" className='link-secondary'><i className="bi bi-link-45deg"></i></Link> with the same name. For example, the C minor chord belongs to the C minor scale. Major chords are described as sounding happy, while minor chords sound sad. See for yourself and have a listen to C Major (C<sub>M</sub>) and C Minor (C<sub>m</sub>)!</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-8 mx-auto d-flex justify-content-center'>
        <div className='col-6 mt-5 mx-auto d-flex justify-content-center'>
          <div>
          <InterfaceButton text="C" color="outline" chordtype='major' chord={cmajor}/>
          </div>
        </div> 
        <div className='col-6 mt-5 mx-auto d-flex justify-content-center'>
          <div>
            <InterfaceButton text="C" color="outline" chordtype='minor' chord={cminor}/>
          </div>
        </div>
        </div>
        
      </div>
      <div className="row">
        <div className="mx-auto col-lg-8 col-md-12 mt-5">
          <span className='text-center mallanna'>Now that you have a grip on major and minor triads, start practicing!</span>
        </div>
      </div>
      <div className='row'>
        <div className=' mt-5 col-4 col-offset-4 mx-auto mb-5'>
          <Link to='/chords'>
            <Button text="Practice" color="green" wide/>
          </Link>
        </div>
        
      </div>
      
    </div>
  );
}

export default ChordInfo;