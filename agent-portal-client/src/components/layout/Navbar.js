import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <img src='./realtor.png' alt='' width='200' height='auto' />
          </Link>
        </div>
        <div className='menu'>
          <div className='links'>
            <ul className='nav-ul'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='btns'>
            <button className='btn'>
              <Link to='/register' className='Link-Auth-Btn'>
                Register
              </Link>
            </button>
            <button className='btn'>
              <Link to='login' className='Link-Auth-Btn'>
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
