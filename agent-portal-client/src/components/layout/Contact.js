import React, { Fragment } from 'react';
import Navbar from './Navbar';

const Contact = () => (
  <Fragment>
    <div className='landing-page'>
      <Navbar />
      <div className='contact-form-div'>
        <form className='contact-us-form login-form'>
          <div className='form-inputs'>
            <label className='text-1 contact-us-label' for='form'>
              Contact Us
            </label>
            <input className='credentials' placeholder='Full Name' />
            <input className='credentials' placeholder='Email' />
            <input className='credentials' placeholder='Phone Number' />
            <textarea
              className='credentials'
              placeholder='Describe briefly how can we help you?'
            ></textarea>
            <div className='preferred-div'>
              <span className='text-2'>Preferred Contact: </span>
              <input
                className='credentials preferred-checkbox'
                type='checkbox'
                name='preferredChoice'
                value='email'
              />
              <label className='text-2' for='email'>
                Email?
              </label>
              <input
                className='credentials preferred-checkbox'
                type='checkbox'
                name='preferredChoice'
                value='phone'
              />
              <label className='text-2' for='phone'>
                Phone?
              </label>
            </div>
            <input
              className='btn btn-jumbo-signup btn-submit-login'
              type='submit'
              value='Send'
            />
          </div>
        </form>
        <div className='contact-us-support'>
          <p>Connect with us:</p>
          <p>For support or any questions:</p>
          <p>
            Email us at:{'  '}
            <span className='emailSupport'>alifmaknojia17@yahoo.com</span>
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Contact;
