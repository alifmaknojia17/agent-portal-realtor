import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import AddListingDetails from './addListingDetails/AddListingDetails';

const AddListing = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='add-listing-container'>
        <AddListingDetails />
      </div>
    </Fragment>
  );
};

export default AddListing;
