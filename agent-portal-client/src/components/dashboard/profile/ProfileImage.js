import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../../actions/auth';
import { profilePic } from '../../../actions/profile';

const ProfileImage = ({ loadUser, profilePic, agent }) => {
  const [formData, setFormData] = useState({
    avatar: '',
  });

  useEffect(() => {
    loadUser();
    setFormData({
      avatar: agent ? agent.avatar : '',
    });
  }, [loadUser]);

  const { avatar } = formData;

  const onChangeImage = (e) => {
    setFormData({ avatar: e.target.files[0] });
  };

  const onClickUpload = (e) => {
    const data = new FormData();
    data.append('avatar', avatar);
    profilePic(data);
  };

  return (
    <Fragment>
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
          <button className='btn-upload' onClick={(e) => onClickUpload(e)}>
            Upload
          </button>
        </div>
      </div>
    </Fragment>
  );
};

ProfileImage.propTypes = {
  loadUser: PropTypes.func.isRequired,
  profilePic: PropTypes.func.isRequired,
  agent: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  agent: state.auth.agent,
});

export default connect(mapStateToProps, { loadUser, profilePic })(
  withRouter(ProfileImage)
);
