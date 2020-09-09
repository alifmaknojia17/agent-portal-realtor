import React, { Fragment } from 'react';

const PropertyDetails = ({ formData, onPropertyDetailsChange }) => {
  const propertyDetials = { ...formData };
  const {
    street,
    city,
    state,
    zip,
    price,
    squareFoot,
    beds,
    bath,
    listingType,
  } = propertyDetials;

  return (
    <Fragment>
      <div class='property-details'>
        <p>
          <strong>Property Detail: </strong>
        </p>
        <input
          placeholder='Street'
          name='street'
          value={street}
          onChange={onPropertyDetailsChange}
        />
        <input
          placeholder='City'
          name='city'
          value={city}
          onChange={onPropertyDetailsChange}
        />
        <input
          placeholder='State'
          name='state'
          value={state}
          onChange={onPropertyDetailsChange}
        />
        <input
          placeholder='Zip Code'
          name='zip'
          value={zip}
          onChange={onPropertyDetailsChange}
        />
        <input
          placeholder='price'
          name='price'
          value={price}
          onChange={onPropertyDetailsChange}
        />
        <input
          placeholder='Square foot'
          name='squareFoot'
          value={squareFoot}
          onChange={onPropertyDetailsChange}
        />
        <input
          placeholder='Number of Beds'
          name='beds'
          value={beds}
          onChange={onPropertyDetailsChange}
        />
        <input
          placeholder='Number of Baths'
          name='bath'
          value={bath}
          onChange={onPropertyDetailsChange}
        />
        <select
          name='listingType'
          value={listingType}
          onChange={onPropertyDetailsChange}
        >
          <option class='' value='default'>
            Listing Type:
          </option>
          <option class='' value='Sale'>
            For Sale
          </option>
          <option class='' value='Rent'>
            For Rent
          </option>
        </select>
      </div>
    </Fragment>
  );
};

export default PropertyDetails;
