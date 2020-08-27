import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const onLogoutClick = (e) => {
    logout();
  };
  return (
    <Fragment>
      <div className='landing-profile'>
        <div className='navbar'>
          <div className='logo'>
            <Link to='/profile'>
              <img src='./realtor.png' alt='' width='200' height='auto' />
            </Link>
          </div>
          <div className='menu'>
            <div className='links'>
              <ul className='nav-ul'>
                <li>
                  <Link to='/profile'>
                    <i className='fa fa-user'></i> Profile
                  </Link>
                </li>
                <li>
                  <Link to='/listings'>
                    <i className='fa fa-list-ul'></i> Listings
                  </Link>
                </li>
                <li>
                  <Link to='/add-listing'>
                    <i className='fa fa-plus-circle'></i> Add Listing
                  </Link>
                </li>
              </ul>
            </div>
            <div className='btns'>
              <button
                className='btn btn-menu btn-signup'
                onClick={(e) => onLogoutClick(e)}
              >
                <i className='fa fa-sign-out'></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
