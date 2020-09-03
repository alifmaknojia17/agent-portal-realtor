import React, { Fragment } from 'react';

const HomeType = () => {
  return (
    <Fragment>
      <div className='filter-home-type'>
        <p>Home type:</p>
        <input type='checkbox' name='homeType' value='singleFamily' />
        <label for='singleFamily'>Single Family</label>
        <br />
        <input type='checkbox' name='homeType' value='multiFamily' />
        <label for='multiFamily'>Multi Family</label>
        <br />
        <input type='checkbox' name='homeType' value='condos' />
        <label for='condos'>Condos</label>
        <br />
        <input type='checkbox' name='homeType' value='apartment' />
        <label for='apartment'>Apartment</label>
        <br />
        <input type='checkbox' name='homeType' value='land' />
        <label for='land'>Lots/Land</label>
        <br />
        <input type='checkbox' name='homeType' value='townhomes' />
        <label for='townhomes'>Town Homes</label>
        <br />
      </div>
    </Fragment>
  );
};

export default HomeType;
