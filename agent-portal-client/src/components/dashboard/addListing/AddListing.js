import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import AddListingDetails from './addListingDetails/AddListingDetails';
import AddListingImages from './addListingImages/AddListingImages';

const AddListing = () => {
  return (
    <Fragment>
      <Navbar />
      <div class='add-listing-container'>
        <AddListingDetails />
        <AddListingImages />
      </div>
    </Fragment>
  );
};

export default AddListing;
