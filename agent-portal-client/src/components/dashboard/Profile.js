import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { editProfile, changePassword, profilePic } from '../../actions/profile';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import Modal from '../modal/EditProfileModal';
import { setAlert } from '../../actions/alert';
import Alert from '../layout/Alert';

// <button
// hidden
// type='button'
// className='btn btn-jumbo-signup'
// id='custom-button'
// onClick={(e) => onEditImageClick(e)}
// >
// Edit Image
// </button>
// <span id='custom-text'>No file chosen, yet.</span>

const Profile = ({
  loadUser,
  editProfile,
  changePassword,
  profilePic,
  setAlert,
  agent,
  loading,
}) => {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
    setFormData({ ...formData, ...agent });
  };

  // onEditImageClick = (e) => {
  //   console.log('clicked');
  // };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    avatar: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    loadUser();
    setFormData({
      fullName: agent ? agent.fullName : '',
      email: agent ? agent.email : '',
      phoneNumber: agent ? agent.phoneNumber : '',
      avatar: agent ? agent.avatar : '',
    });
  }, [loadUser]);

  const {
    fullName,
    email,
    phoneNumber,
    avatar,
    currentPassword,
    newPassword,
    confirmPassword,
  } = formData;

  const onChangeImage = (e) => {
    setFormData({ avatar: e.target.files[0] });
  };

  const onClickUpload = (e) => {
    const data = new FormData();
    data.append('avatar', avatar);
    profilePic(data);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    modalRef.current.close();
    editProfile(formData);
  };

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
      <Navbar />
      <div className='container'>
        <div className='profile-img'>
          <div className='image-upload-btn'>
            {agent && (
              <img src={`./profilePic/${agent.avatar}`} alt='Profile Pic' />
            )}
            <br />
            <input
              type='file'
              name='file'
              id='real-file'
              onChange={(e) => onChangeImage(e)}
            />
            <br />
            <button
              className='btn btn-jumbo-signup btn-edit-profile'
              onClick={(e) => onClickUpload(e)}
            >
              Upload
            </button>
          </div>
        </div>
        <div className='profile'>
          <div className='profile-data'>
            <button
              className='btn btn-jumbo-signup btn-edit-profile'
              onClick={openModal}
            >
              Edit Profile
            </button>
            <Modal ref={modalRef}>
              <h3 className='text-1 h3-modal'>Change Profile</h3>
              <br />
              <form onSubmit={(e) => onSubmit(e)} className='modal-form'>
                <input
                  className='modal-edit-profile-input credentials'
                  name='fullName'
                  value={fullName}
                  onChange={(e) => onChange(e)}
                />
                <br />
                <input
                  className='modal-edit-profile-input credentials'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
                <br />
                <input
                  className='modal-edit-profile-input credentials'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={(e) => onChange(e)}
                />
                <br />
                <input type='submit' value='Save' className='modal-save' />
              </form>
              <button
                onClick={() => modalRef.current.close()}
                className='close-modal'
              >
                X
              </button>
            </Modal>
            <p className='profile-text profile-details'>
              <strong>Name:</strong> {agent && agent.fullName}
            </p>
            <p className='profile-text profile-details'>
              <strong>Email:</strong> {agent && agent.email}
            </p>
            <p className='profile-text profile-details'>
              <strong>Phone:</strong> {agent && agent.phoneNumber}
            </p>
          </div>

          <form
            className='change-password'
            onSubmit={(e) => onChangePasswordSubmit(e)}
          >
            <p htmlFor='change-password' fontSize='1.2em'>
              Change Password
            </p>
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
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  profilePic: PropTypes.object.isRequired,
  agent: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  agent: state.auth.agent,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  loadUser,
  editProfile,
  setAlert,
  changePassword,
  profilePic,
})(withRouter(Profile));
