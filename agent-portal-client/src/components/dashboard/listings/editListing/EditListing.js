import React, { Fragment } from 'react';
import Navbar from '../../Navbar';
import EditListingDetails from './editListingDetails/EditListingDetails';
import EditListingImages from './editListingImages/EditListingImages';

const EditListing = (props) => {
  const listing = props.location.listing;
  const images = props.location.images;
  return (
    <Fragment>
      <Navbar />
      <div class='edit-listing-container'>
        <EditListingDetails listing={listing} />
        <EditListingImages listing={listing} imagesDB={images} />
      </div>
    </Fragment>
  );
};

export default EditListing;
