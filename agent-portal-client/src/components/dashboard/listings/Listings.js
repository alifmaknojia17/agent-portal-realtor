import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import { loadListings } from '../../../actions/listings';
import IndividualListing from './IndividualListing';
import FilterListing from './listingFilter/FilterListing';

const Listings = ({ loadListings, listings: { allListings } }) => {
  useEffect(() => {
    loadListings();
  }, [loadListings]);

  const [filter, setFilter] = useState({
    listings: '',
  });

  const onListingTypeInputChange = (e) => {
    let listing = allListings.filter((listing) => {
      return listing.propertyDetails.listingType === e.target.value;
    });
    setFilter({ filter, listings: listing });
  };
  console.log(filter.listings);

  return (
    <Fragment>
      <Navbar />
      <div className='outter-container'>
        <FilterListing onListingTypeInputChange={onListingTypeInputChange} />
        <div className='listings'>
          {allListings.length > 0 && filter.listings.length <= 0
            ? allListings.map((listing) => (
                <IndividualListing key={listing.id} listing={listing} />
              ))
            : filter.listings.length > 0
            ? filter.listings.map((listing) => (
                <IndividualListing key={listing.id} listing={listing} />
              ))
            : 'Add listings'}
        </div>
      </div>
    </Fragment>
  );
};

Listings.propTypes = {
  loadListings: PropTypes.func.isRequired,
  allListings: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  listings: state.allListings,
});

export default connect(mapStateToProps, { loadListings })(withRouter(Listings));
