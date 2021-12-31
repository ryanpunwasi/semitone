import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import Caption from './Caption';
import InteractivePiano from './InteractivePiano';

const Home = () => {
  return (
    <React.Fragment>
      <div className='container'>
      <div className='row'>
          <div className='col mb-4 mt-3'>
              <InteractivePiano />
          </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Caption size="h4" text="The free and fun way to practice your perfect pitch ability!"/>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6 col-md-6 col-lg-4 mx-auto mt-5 mb-0'>
        <Button text='Continue with Google' color='red' wide google></Button>
        <div className='row mb-5'>
          <div className='col'>
            <Link className='d-inline' to='/onboarding'>
            <Button text='Continue without logging in' color='transparent' wide></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </React.Fragment>
        
  );
}

export default Home;