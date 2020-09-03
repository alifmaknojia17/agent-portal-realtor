import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import Alert from '../layout/Alert';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return (
    <Fragment>
      <div className='landing-page'>
        <Navbar />
        <form
          className='jumbotron login-form'
          id='form'
          onSubmit={(e) => onSubmit(e)}
        >
          <div className='form-inputs'>
            <Alert />
            <label className='text-1' for='form'>
              Login
            </label>
            <input
              className='credentials'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className='credentials'
              placeholder='Password'
              type='password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className='btn btn-jumbo-signup btn-submit-login'
              type='submit'
              value='Login'
            />
          </div>
          <div className='form-option-1'>
            <span className='text-2'>Or login with</span>
            <div className='social'>
              <a className='facebook-btn' href='#'>
                <i className='fa fa-facebook'></i>
              </a>
              <a className='google-btn' href='#'>
                <i className='fa fa-google'></i>
              </a>
              <a className='twitter-btn' href='#'>
                <i className='fa fa-twitter'></i>
              </a>
            </div>
          </div>
          <div className='text-3'>
            <Link to='/register'>Don't have an account? Register</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
