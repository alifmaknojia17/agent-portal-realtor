import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import ProfileImage from './ProfileImage';
import ProfileDetails from './ProfileDetails';
import ProfilePassword from './ProfilePassword';

const Profile = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <ProfileImage />
        <div className='profile'>
          <ProfileDetails />
          <ProfilePassword />
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
