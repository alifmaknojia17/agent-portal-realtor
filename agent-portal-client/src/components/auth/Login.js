import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import PropTypes from 'prop-types';
import { login, googleLogin, facebookLogin } from '../../actions/auth';
import Alert from '../layout/Alert';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Login = ({ login, googleLogin, facebookLogin, isAuthenticated }) => {
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

  //Google OAuth
  const responseSuccessGoogle = (response) => {
    googleLogin({
      tokenId: response.tokenId,
      agentAvatar: response.profileObj.imageUrl,
    });
  };

  const responseErrorGoogle = (response) => {
    console.log('error', response);
  };

  const responseFacebook = (response) => {
    facebookLogin({
      accessToken: response.accessToken,
      userID: response.userID,
    });
  };

  return (
    <Fragment>
      <div className='landing-page'>
        <Navbar />
        <form className='auth-form' id='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-inputs'>
            <Alert />
            <label htmlFor='form'>Login</label>
            <input
              className='auth-inputs'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className='auth-inputs'
              placeholder='Password'
              type='password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <input className='btn-submit' type='submit' value='Login' />
          </div>
          <div className='form-option-1'>
            <span>Or login with</span>
            <div className='social'>
              <GoogleLogin
                clientId='239213687672-eq8drf05rc9khah97pfo1konh54ndt08.apps.googleusercontent.com'
                render={(renderProps) => (
                  <button
                    className='socialBtn'
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <i className='fa fa-google'></i>
                  </button>
                )}
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <FacebookLogin
                appId='354432242585429'
                autoLoad={false}
                callback={responseFacebook}
                render={(renderProps) => (
                  <button onClick={renderProps.onClick} className='socialBtn'>
                    <i className='fa fa-facebook'></i>
                  </button>
                )}
              />
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
  googleLogin: PropTypes.func.isRequired,
  facebookLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, googleLogin, facebookLogin })(
  Login
);
