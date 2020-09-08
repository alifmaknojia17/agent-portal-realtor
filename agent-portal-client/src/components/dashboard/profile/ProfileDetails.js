import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './modal/EditProfileModal';
import { loadUser } from '../../../actions/auth';
import { editProfile } from '../../../actions/profile';

const ProfileDetails = ({ loadUser, editProfile, agent }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    loadUser();
    setFormData({
      fullName: agent ? agent.fullName : '',
      email: agent ? agent.email : '',
      phoneNumber: agent ? agent.phoneNumber : '',
    });
  }, [loadUser]);

  const { fullName, email, phoneNumber } = formData;
  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
    setFormData({ ...formData, ...agent });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    modalRef.current.close();
    editProfile(formData);
  };

  return (
    <Fragment>
      <div className='profile-data'>
        <button className='btn-edit-profile' onClick={openModal}>
          Edit Profile
        </button>

        <Modal ref={modalRef}>
          <h3>Change Profile</h3>
          <br />
          <form onSubmit={(e) => onSubmit(e)} className='modal-form'>
            <input
              className='profile-edit-modal-input'
              name='fullName'
              value={fullName}
              onChange={(e) => onChange(e)}
            />
            <br />
            <input
              className='profile-edit-modal-input'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
            <br />
            <input
              className='profile-edit-modal-input'
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
    </Fragment>
  );
};

ProfileDetails.propTypes = {
  editProfile: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  agent: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  agent: state.auth.agent,
});

export default connect(mapStateToProps, { loadUser, editProfile })(
  withRouter(ProfileDetails)
);
