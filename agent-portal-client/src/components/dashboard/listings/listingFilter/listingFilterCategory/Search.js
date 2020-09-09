import React, { Fragment } from 'react';

const Search = ({ onSearchInputChange, search }) => {
  return (
    <Fragment>
      <div className='search-criteria'>
        <input
          type='search'
          placeholder='City, State or Zip'
          name='search'
          value={search}
          onChange={onSearchInputChange}
        />
        <button className='search-btn'>
          <i className='fa fa-search'></i>
        </button>
      </div>
    </Fragment>
  );
};

export default Search;
