import React, { Component } from 'react';
import areteLogo from '../images/logo_arete.png'
import '../styles/Logo.css'

export default class Logo extends Component {
  render() {
    return (
      <div className='logo-container'>
        <img src={areteLogo} alt='logo areté' className='logo' />
      </div>
    );
  }
}
