import React from 'react';
import areteLogo from '../images/logo_arete.png'
import '../styles/Logo.css'

export default function Logo() {
  return (
    <div className='logo-container'>
    <img src={areteLogo} alt='logo areté' className='logo' />
  </div>
  )
}