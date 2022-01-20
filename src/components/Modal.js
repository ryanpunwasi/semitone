import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Modal.css';

const OVERLAY = {
  position: 'fixed',
  top: 0, 
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '15%',
    bottom: '25%',
    left: '30%',
    right:'30%',
    width: '40%',
    padding: '50px',
    zIndex: 1000,
    borderRadius: '8px',
    height: '50%',
    minHeight: '275px'
};

export default function Modal({ open, children, onClose}) {
  if(!open) return null;

  return(
    <>
      <div style={OVERLAY}/>
      <div style={MODAL_STYLE} className='bg-light'>
        <p style={{ color: '#f55d41' }} className="fw-bolder h3 text-center mb-5">Exit Session?</p>
        <Link to='/octaves'>
          <Button text="Exit" color='red' wide/>
        </Link>
        <Button text="Cancel" color='transparent' onClick={onClose} wide />
        {children}
      </div>
    </>
  )
}