import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadListingImages, loadListings } from '../../../../actions/listings';
import Navbar from '../../Navbar';
import EditListingDetails from './editListingDetails/EditListingDetails';
import EditListingImages from './editListingImages/EditListingImages';
import PropTypes from 'prop-types';

const EditListing = ({ match, loadListings, loadListingImages }) => {
  const listingId = match.params.id;
  useEffect(() => {
    loadListings();
    loadListingImages(listingId);
  }, [loadListings]);

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

EditListing.propTypes = {
  loadListings: PropTypes.func.isRequired,
  loadListingImages: PropTypes.func.isRequired,
};

export default connect(null, { loadListings, loadListingImages })(
  withRouter(EditListing)
);
