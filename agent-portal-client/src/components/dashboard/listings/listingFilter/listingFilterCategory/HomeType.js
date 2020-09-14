import React, { Fragment } from 'react';

const HomeType = ({ onHomeTypeInputChange }) => {
  return (
    <Fragment>
      <div className='filter-home-type'>
        <p>Home type:</p>
        <input
          type='checkbox'
          name='homeType'
          value='singleFamily'
          onChange={onHomeTypeInputChange}
        />
        <label htmlFor='singleFamily'>Single Family</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='multiFamily'
          onChange={onHomeTypeInputChange}
        />
        <label htmlFor='multiFamily'>Multi Family</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='condos'
          onChange={onHomeTypeInputChange}
        />
        <label htmlFor='condos'>Condos</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='apartment'
          onChange={onHomeTypeInputChange}
        />
        <label htmlFor='apartment'>Apartment</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='land'
          onChange={onHomeTypeInputChange}
        />
        <label htmlFor='land'>Lots/Land</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='townHomes'
          onChange={onHomeTypeInputChange}
        />
        <label htmlFor='townhomes'>Town Homes</label>
        <br />
      </div>
    </Fragment>
  );
};

export default HomeType;
