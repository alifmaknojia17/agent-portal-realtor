import React, { Fragment } from 'react';

const Price = ({ onPriceInputChange }) => {
  return (
    <Fragment>
      <div className='filter-price'>
        <p>Price:</p>
        <input
          type='radio'
          name='listingPrice'
          id='0'
          value='0'
          onChange={onPriceInputChange}
        />
        <label htmlFor='0'>$0+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='100k'
          value='100000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='100k'>$100,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='200k'
          value='200000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='200k'>$200,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='300k'
          value='300000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='300k'>$300,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='400k'
          value='400000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='400k'>$400,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='500k'
          value='500000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='500k'>$500,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='600k'
          value='600000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='600k'>$600,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='700k'
          value='700000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='700k'>$700,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='800k'
          value='800000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='800k'>$800,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='900k'
          value='900000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='900k'>$900,000+</label>
        <br />
        <input
          type='radio'
          name='listingPrice'
          id='1m'
          value='1000000'
          onChange={onPriceInputChange}
        />
        <label htmlFor='1m'>$1,000,000+</label>
        <br />
      </div>
    </Fragment>
  );
};

export default Price;
