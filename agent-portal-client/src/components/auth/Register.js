import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import Navbar from '../layout/Navbar';
import Alert from '../layout/Alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
    phoneNumber: '',
  });

  const { fullName, email, password, password2, phoneNumber } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ fullName, email, password, phoneNumber });
    }
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
          <Alert />
          <div className='form-inputs'>
            <label className='text-1' htmlFor='form'>
              Register
            </label>
            <input
              className='credentials'
              placeholder='Full Name'
              name='fullName'
              value={fullName}
              onChange={(e) => onChange(e)}
              required
            />
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
              className='credentials'
              placeholder='Confirm Password'
              type='password'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className='credentials'
              placeholder='Phone Number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className='btn btn-jumbo-signup btn-submit-login'
              type='submit'
              value='Register'
            />
          </div>
          <div className='text-3'>
            <Link to='login'>Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
