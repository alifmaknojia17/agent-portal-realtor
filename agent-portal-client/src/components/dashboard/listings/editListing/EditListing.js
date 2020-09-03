import React, { Fragment } from 'react';
import Navbar from '../../Navbar';
import EditListingDetails from './editListingDetails/EditListingDetails';
import EditListingImages from './editListingImages/EditListingImages';

const EditListing = (props) => {
  const listing = props.location.listing;
  return (
    <Fragment>
      <Navbar />
      <div class='add-listing-container'>
        <EditListingDetails listing={listing} />
        <EditListingImages />
      </div>
    </Fragment>
  );
};

export default EditListing;
