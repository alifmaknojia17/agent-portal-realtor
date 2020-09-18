import React, { Fragment } from 'react';
import Navbar from '../../Navbar';
import EditListingDetails from './editListingDetails/EditListingDetails';
import EditListingImages from './editListingImages/EditListingImages';

const EditListing = (props) => {
  const listingId = props.match.params.id;
  return (
    <Fragment>
      <Navbar />
      <div className='edit-listing-container'>
        <EditListingDetails listingId={listingId} />
        <EditListingImages listingId={listingId} />
      </div>
    </Fragment>
  );
};

export default EditListing;
