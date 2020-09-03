import React, { Fragment } from 'react';

const Search = () => {
  return (
    <Fragment>
      <div className='search-criteria'>
        <input
          className='search-input'
          type='search'
          placeholder='City, State or Zip'
        />
        <button className='search-btn'>
          <i className='fa fa-search'></i>
        </button>
      </div>
    </Fragment>
  );
};

export default Search;
