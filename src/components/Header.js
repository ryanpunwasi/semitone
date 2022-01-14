import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import IconOne from '../assets/img/051-electric-guitar.svg';
import IconTwo from '../assets/img/trombone.svg';
import IconThree from '../assets/img/violin-1.svg';
import IconFour from '../assets/img/clarinet.svg';
import './Header.css';

const Header = () => {
  if(useLocation().pathname.split('/').includes('practice')) {
    return null;
  }

  return (
    <nav className='navbar navbar-light bg-light p-1 border-bottom border-2 mb-4'>
        <ul className="navbar-nav">
            <li className="nav-item me-5">
              <Link className='nav-link' to='/'>
                <h3 className='d-none d-sm-inline ms-2 logo-text'>Semitone</h3>
              </Link>          
            </li>
            <li className="nav-item me-5">
              <Link className='nav-link' to='/notes'>
                <img className='img-fluid d-inline' src={IconFour} alt='' width='30' height='30'/>
                <p className='d-inline ms-2'>Notes</p>
              </Link>          
            </li>
            <li className="nav-item me-5">
              <Link className='nav-link' to='/octaves'>
                <img className='img-fluid d-inline' src={IconTwo} alt='' width='30' height='30'/>
                <p className='d-inline ms-2'>Octaves</p>
              </Link>          
            </li>
            <li className="nav-item me-5">
              <Link className='nav-link' to='/scales'>
                <img className='img-fluid d-inline' src={IconOne} alt='' width='30' height='30'/>
                <p className='d-inline ms-2'>Scales</p>
              </Link>          
            </li>
            <li className="nav-item me-5 mb-1">
              <Link className='nav-link' to='/chords'>
                <img className='img-fluid d-inline' src={IconThree} alt='' width='30' height='30'/>
                <p className='d-inline ms-2'>Chords</p>
              </Link>          
            </li>
        </ul>
    </nav>
  );
};

export default Header;