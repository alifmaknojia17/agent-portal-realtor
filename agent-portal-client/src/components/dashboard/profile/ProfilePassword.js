import React, { Fragment, useState } from 'react';
import { setAlert } from '../../../actions/alert';
import { changePassword } from '../../../actions/profile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '../../layout/Alert';
import PropTypes from 'prop-types';

const ProfilePassword = ({ changePassword, setAlert }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { currentPassword, newPassword, confirmPassword } = formData;

  const onPasswordChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setAlert('New password do not match', 'danger');
    } else {
      changePassword(formData);
    }
  };

  return (
    <Fragment>
      <form
        className='change-password'
        onSubmit={(e) => onChangePasswordSubmit(e)}
      >
        <p htmlFor='change-password'>Change Password</p>
        <Alert />
        <label className='profile-text' htmlFor='current'>
          Current Password:
        </label>
        <input
          className='change-password-input'
          type='password'
          name='currentPassword'
          value={currentPassword}
          onChange={(e) => onPasswordChange(e)}
        />
        <label className='profile-text' htmlFor='newPassword'>
          New Password:{' '}
        </label>
        <input
          className='change-password-input'
          type='password'
          name='newPassword'
          value={newPassword}
          onChange={(e) => onPasswordChange(e)}
        />
        <label className='profile-text' htmlFor='confirmPassword'>
          Re-type new password:
        </label>
        <input
          className='change-password-input'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => onPasswordChange(e)}
        />
        <input
          className='btn btn-jumbo-signup btn-save-changes'
          type='submit'
          value='Save Changes'
        />
      </form>
    </Fragment>
  );
};

ProfilePassword.propTypes = {
  loadUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, changePassword })(
  withRouter(ProfilePassword)
);
