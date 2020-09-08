import React, { Fragment } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <div className='landing-page'>
      <Navbar />
      <div className='jumbotron'>
        <p className='jumbotron-p-1'>REALTOR PORTAL</p>
        <p className='jumbotron-p-2'>
          Create your real estate portfolio. Share your listing to potential
          buyers
        </p>
        <div className='btns'>
          <button className='btn-jumbo'>
            <Link to='/register'>Register</Link>
          </button>
          <button className='btn-jumbo'>
            <Link to='/login'>Login</Link>
          </button>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Home;
