import React from 'react';
import { Link } from 'react-router-dom';
import InterfaceButton from './InterfaceButton';
import Button from './Button';
import Image from '../assets/img/keyboard-majorscale.svg';
import ImageTwo from '../assets/img/keyboard-minorscale.svg';
import AMinor from '../assets/octave-3/AMinorScale.mp3';

const ScaleInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          <Link to='/onboarding'>
            <Button text="← Onboarding" color='outline'/>
          </Link>
          <Link to='/chordinfo'>
          <Button text="What's a chord? →" color='pink'/>
        </Link>
        </div>
      </div>
      <div className="row">
        <div className="mx-auto col-lg-8 col-md-12">
          <h3 className='text-center mt-4 mb-4 mallanna'>What is a scale?</h3>
          <span className='text-center mt-4 mallanna'>A scale is a set of musical notes ordered by pitch <a href="https://en.wikipedia.org/wiki/Scale_(music)" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>. Notes within a scale generally belong to the same octave<Link to="./octaveinfo" className='link-secondary'><i className="bi bi-link-45deg"></i></Link>, allowing any given scale to be played in different octaves. The two types of scales we will focus on are major scales and natural minor scales. Both major and natural minor scales consist of eight notes with the last note of the scale being the same letter note as the first, but one octave higher.</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-sm-10 offset-sm-1 offset-md-3 mt-5 mx-auto'>
          <div>
            <figure>
              <img className='d-inline-block mx-auto' src={Image} alt=''/>
              <figcaption className='text-muted text-center mt-3'>The C Major scale.</figcaption>
            </figure>
          </div>
        </div> 
      </div>
      <div className="row">
        <div className="mx-auto col-lg-8 col-md-12 mt-4">
          <span className='text-center mallanna'>Major scales are one of the most commonly used musical scales. The simplest major scale on a piano is C Major because it consists only of white keys (it has no sharps or flats). The spacing between the notes in a major scale is: W-W-H-W-W-W-H (W = whole step, H = half step).</span>
        </div>
      </div>      
      <div className='row'>
        <div className='col-md-6 offset-md-3 mt-5 mx-auto col-sm-10 offset-sm-1'>
          <div>
            <figure>
              <img className='d-inline-block mx-auto' src={ImageTwo} alt=''/>
              <figcaption className='text-muted text-center mt-3'>The A Minor scale.</figcaption>
              </figure>
          </div>
        </div> 
      </div>
      <div className="row">
        <div className="mx-auto col-lg-8 col-md-12 mt-4">
          <span className='text-center mallanna'>In contrast, the spacing between the notes in a natural minor scale is: W-H-W-W-H-W-W. Have a listen to the A Minor scale below.</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-8 mx-auto d-flex justify-content-center'>
        <div className='col-6 mt-5 mx-auto d-flex justify-content-center'>
          <div>
            <InterfaceButton text="A" chordtype='minor' color="outline" note={new Audio(AMinor)}/>
          </div>
        </div>
        </div>
        
      </div>
      <div className="row">
        <div className="mx-auto col-lg-8 col-md-12 mt-5">
          <span className='text-center mallanna'>Now that you're all caught up on major and minor scales, it's time to practice!</span>
        </div>
      </div>
      <div className='row'>
        <div className=' mt-5 col-4 col-offset-4 mx-auto mb-5'>
          <Link to='/scales'>
            <Button text="Practice" color="green" wide/>
          </Link>
        </div>
        
      </div>
      
    </div>
  );
}

export default ScaleInfo;