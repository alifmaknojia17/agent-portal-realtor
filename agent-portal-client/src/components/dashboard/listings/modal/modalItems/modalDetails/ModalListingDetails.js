import React, { Fragment } from 'react';
import NumberFormat from 'react-number-format';

const ModalListingDetails = ({ listing }) => {
  return (
    <Fragment>
      <div className='modal-listing-details'>
        <div>
          <span className='price'>
            <NumberFormat
              value={listing.propertyDetails.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </span>
          <span className='detail' id='beds'>
            {listing.propertyDetails.beds} bd
          </span>
          <span className='detail' id='baths'>
            {listing.propertyDetails.bath} ba
          </span>
          <span className='detail' id='sqft'>
            {listing.propertyDetails.squareFoot}Square Feet
          </span>
          <br />
          <span>
            {listing.propertyDetails.street}, {<br />}{' '}
            {listing.propertyDetails.city}, {listing.propertyDetails.state}{' '}
            {listing.propertyDetails.zip}
          </span>
        </div>
        <div>
          <span>
            <h3>Overview</h3>
            {listing.overview}
          </span>
        </div>
        <div>
          <span>
            <h3>Facts and features</h3>
            Type:{' '}
            {listing.factAndFeatures.propertyType === 'singleFamily'
              ? 'Single Family'
              : listing.factAndFeatures.propertyType === 'multiFamily'
              ? 'Multi Family'
              : listing.factAndFeatures.propertyType === 'condos'
              ? 'Condos'
              : listing.factAndFeatures.propertyType === 'apartment'
              ? 'Apartment'
              : listing.factAndFeatures.propertyType === 'land'
              ? 'Land'
              : listing.factAndFeatures.propertyType === 'townHomes'
              ? 'Town Homes'
              : ''}
            <br />
            Year built: {listing.factAndFeatures.yearBuilt}
            <br />
            Parking: {listing.factAndFeatures.parking}
            <br />
            HOA: {listing.factAndFeatures.HOA}
          </span>
        </div>
        <div>
          <h3>Near by schools</h3>
          <span>{listing.school.schoolName}</span>
          <br />
          <span>
            Grades: {listing.school.grades} Distance:{listing.school.distance}
          </span>
        </div>
        <div>
          <h3>Things near by</h3>
          <span>{listing.nearBy}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalListingDetails;
