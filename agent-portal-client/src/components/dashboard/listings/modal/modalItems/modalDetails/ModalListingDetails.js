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
            <strong>Overview</strong>
            <br />
            {listing.overview}
          </span>
        </div>
        <div>
          <span>
            <strong>Facts and features</strong>
            <br />
            Type: {listing.factAndFeatures.propertyType}
            <br />
            Year built: {listing.factAndFeatures.yearBuilt}
            <br />
            Parking: {listing.factAndFeatures.parking}
            <br />
            HOA: {listing.factAndFeatures.HOA}
          </span>
        </div>
        <div>
          <strong>Near by schools</strong>
          <br />
          <span>{listing.school.schoolName}</span>
          <br />
          <span>
            Grades: {listing.school.grades} Distance:{listing.school.distance}
          </span>
        </div>
        <div>
          <strong>Things near by</strong>
          <br />
          <span>{listing.nearBy}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalListingDetails;
