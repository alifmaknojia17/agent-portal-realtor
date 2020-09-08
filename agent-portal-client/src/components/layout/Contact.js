import React, { Fragment } from 'react';
import Navbar from './Navbar';

const Contact = () => (
  <Fragment>
    <div className='landing-page'>
      <Navbar />
      <div className='contact-form-div'>
        <form className='contact-us-form'>
          <div className='contact-form-inputs'>
            <label for='form'>Contact Us</label>
            <input className='contact-input' placeholder='Full Name' />
            <input className='contact-input' placeholder='Email' />
            <input className='contact-input' placeholder='Phone Number' />
            <textarea
              className='contact-input'
              placeholder='Describe briefly how can we help you?'
            ></textarea>
            <div className='preferred-div'>
              <span>Preferred Contact: </span>
              <input
                className='contact-input'
                type='checkbox'
                name='preferredChoice'
                value='email'
              />
              <label for='email'>Email?</label>
              <input
                className='contact-input'
                type='checkbox'
                name='preferredChoice'
                value='phone'
              />
              <label for='phone'>Phone?</label>
            </div>
            <input className='btn-submit' type='submit' value='Send' />
          </div>
        </form>
        <div className='contact-us-support'>
          <p>Connect with us:</p>
          <p>For support or any questions:</p>
          <p>
            Email us at:{'  '}
            <span>alifmaknojia17@yahoo.com</span>
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Contact;
