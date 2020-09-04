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
        <label for='singleFamily'>Single Family</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='multiFamily'
          onChange={onHomeTypeInputChange}
        />
        <label for='multiFamily'>Multi Family</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='condos'
          onChange={onHomeTypeInputChange}
        />
        <label for='condos'>Condos</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='apartment'
          onChange={onHomeTypeInputChange}
        />
        <label for='apartment'>Apartment</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='land'
          onChange={onHomeTypeInputChange}
        />
        <label for='land'>Lots/Land</label>
        <br />
        <input
          type='checkbox'
          name='homeType'
          value='townHomes'
          onChange={onHomeTypeInputChange}
        />
        <label for='townhomes'>Town Homes</label>
        <br />
      </div>
    </Fragment>
  );
};

export default HomeType;
