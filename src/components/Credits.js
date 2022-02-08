import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

import IconGraphic from '../assets/img/background.svg';
import SoundGraphic from '../assets/img/mixing.svg';

const Credits = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          <Link to='/'>
            <Button text="← Home" color='outline'/>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="mx-auto col-8">
          <h2 className='text-center mt-4 mb-5 mallanna'>Credits</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-8 d-flex justify-content-center">
          <span className='text-center h5 mt-5 mallanna'>The sound effects for the lessons were obtained from Zapsplat<a href="https://www.zapsplat.com" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right ms-1"></i></a>.</span>
        </div>
        <div className="col-4 mx-auto">
          <img alt='' className="d-inline-block mx-auto" src={SoundGraphic} height='90px' width='90px'/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4 d-flex justify-content-center">
          <img alt='' className="d-inline-block mx-auto mt-4" src={IconGraphic} height='90px' width='90px'/>
        </div>
        <div className="col-8">
          <span className='text-center h5 mt-5 mallanna d-inline-block justify-content-center'>The flat icons used on the website were obtained from Flaticon <a href="https://www.flaticon.com" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>.</span>
        </div>
      </div>
    </div>
  );
}

export default Credits;