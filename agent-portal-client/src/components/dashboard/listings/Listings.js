import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import { loadListings, loadListingImages } from '../../../actions/listings';
import IndividualListing from './IndividualListing';
import FilterListing from './listingFilter/FilterListing';

const Listings = ({
  loadListings,
  loadListingImages,
  listings: { allListings, images },
}) => {
  const [filter, setFilter] = useState({
    searchTerm: '',
    listings: '',
    checked: [],
  });

  useEffect(() => {
    loadListings();
    if (allListings.length > 0) {
      const listing = allListings.filter((listing) => {
        return (
          listing.propertyDetails.city
            .toLowerCase()
            .includes(filter.searchTerm) ||
          listing.propertyDetails.state
            .toLowerCase()
            .includes(filter.searchTerm) ||
          listing.propertyDetails.zip.includes(filter.searchTerm)
        );
      });
      setFilter({ ...filter, listings: listing });
    }
  }, [loadListings, filter.searchTerm]);

  const onSearchInputChange = (e) => {
    setFilter({ ...filter, searchTerm: e.target.value });
  };

  const onListingTypeInputChange = (e) => {
    const listing = allListings.filter((listing) => {
      return listing.propertyDetails.listingType === e.target.value;
    });
    setFilter({ ...filter, listings: listing });
  };

  const onPriceInputChange = (e) => {
    let listing = allListings.filter((listing) => {
      return (
        parseInt(listing.propertyDetails.price) >= parseInt(e.target.value)
      );
    });
    if (listing.length === 0 && e.target.value !== null) {
      listing = -1;
    }
    setFilter({ ...filter, listings: listing });
  };

  const onHomeTypeInputChange = (e) => {
    const currentIndex = filter.checked.indexOf(e.target.value);
    const newChecked = [...filter.checked];

    if (currentIndex === -1) {
      newChecked.push(e.target.value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    const listing = allListings.filter((listing) => {
      return newChecked.includes(listing.factAndFeatures.propertyType);
    });
    setFilter({ ...filter, listings: listing, checked: newChecked });
  };

  return (
    <Fragment>
      <Navbar />
      <div className='outter-container'>
        <FilterListing
          search={filter.search}
          onSearchInputChange={onSearchInputChange}
          onListingTypeInputChange={onListingTypeInputChange}
          onPriceInputChange={onPriceInputChange}
          onHomeTypeInputChange={onHomeTypeInputChange}
        />
        <div className='listings'>
          {/*allListings.length > 0 && filter.listings.length <= 0
            ? allListings.map((listing) => (
                <IndividualListing key={listing.id} listing={listing} />
              ))
            : filter.listings.length > 0 && filter.listings !== -1
            ? filter.listings.map((listing) => (
                <IndividualListing key={listing.id} listing={listing} />
              ))
            : 'No Listings'*/}
          {filter.listings.length > 0 && filter.listings !== -1
            ? filter.listings.map((listing) => (
                <IndividualListing key={listing.id} listing={listing} />
              ))
            : allListings.length > 0 && filter.listings.length <= 0
            ? allListings.map((listing) => (
                <IndividualListing key={listing.id} listing={listing} />
              ))
            : 'No Listings'}
        </div>
      </div>
    </Fragment>
  );
};

Listings.propTypes = {
  loadListings: PropTypes.func.isRequired,
  loadListingImages: PropTypes.func.isRequired,
  allListings: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  listings: state.allListings,
});

export default connect(mapStateToProps, { loadListings, loadListingImages })(
  withRouter(Listings)
);
