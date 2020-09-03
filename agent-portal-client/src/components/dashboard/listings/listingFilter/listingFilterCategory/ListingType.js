import React, { Fragment } from 'react';

const ListingType = ({ onListingTypeInputChange }) => {
  return (
    <Fragment>
      <div className='filter-for'>
        <p>Listing Type:</p>
        <input
          type='radio'
          name='listingType'
          value='Sale'
          onChange={onListingTypeInputChange}
        />
        <label for='Sale'>For Sale</label>
        <br />
        <input
          type='radio'
          name='listingType'
          value='Rent'
          onChange={onListingTypeInputChange}
        />
        <label for='Rent'>For Rent</label>
      </div>
    </Fragment>
  );
};

export default ListingType;
