import React, { Fragment } from 'react';
import Search from './listingFilterCategory/Search';
import ListingType from './listingFilterCategory/ListingType';
import Price from './listingFilterCategory/Price';
import HomeType from './listingFilterCategory/HomeType';

const FilterListing = ({
  onListingTypeInputChange,
  onPriceInputChange,
  onHomeTypeInputChange,
}) => {
  return (
    <Fragment>
      <div className='search'>
        <Search />
        <ListingType onListingTypeInputChange={onListingTypeInputChange} />
        <Price onPriceInputChange={onPriceInputChange} />
        <HomeType onHomeTypeInputChange={onHomeTypeInputChange} />
        <div className='filter-btn-div'>
          <button className='btn btn-jumbo-signup btn-save filter-btn'>
            Filter
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterListing;
