import React, { Fragment, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const IndividualListing = ({ listing }) => {
  return (
    <Fragment>
      <div className='individual-listing'>
        <img
          src='./building.JPG'
          alt='Building Image'
          width='400px'
          height='250px'
        />
        <div className='listing-details'>
          <p>
            <span className='price'>
              <NumberFormat
                value={listing.propertyDetails.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>
            <span className='detail' id='beds'>
              {listing.propertyDetails.beds} bds
            </span>
            <span className='detail' id='baths'>
              {listing.propertyDetails.bath} ba
            </span>
            <span className='detail' id='sqft'>
              {listing.propertyDetails.squareFoot} sqft
            </span>
          </p>
          <p>
            <span>
              {listing.propertyDetails.street}, {<br />}{' '}
              {listing.propertyDetails.city}, {listing.propertyDetails.state}{' '}
              {listing.propertyDetails.zip}
            </span>
          </p>
          <p>
            <span id='listing-type'>
              <i className='fa fa-circle'></i>
              House for {listing.propertyDetails.listingType}
            </span>
            <span className='listing-btns'>
              <Link
                to={{
                  pathname: '/edit-listing',
                  listing,
                }}
                className='btn-listing'
                id='edit-listing'
              >
                <i className='fa fa-edit'></i>
              </Link>
              <button className='btn-listing'>
                <i className='fa fa-trash'></i>
              </button>
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

IndividualListing.propTypes = {};

export default IndividualListing;
