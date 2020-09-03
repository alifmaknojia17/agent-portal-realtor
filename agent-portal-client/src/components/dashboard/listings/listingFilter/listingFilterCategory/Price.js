import React, { Fragment } from 'react';

const Price = () => {
  return (
    <Fragment>
      <div className='filter-price'>
        <p>Price:</p>
        <input type='radio' name='listingPrice' id='0' value='0' />
        <label for='0'>$0+</label>
        <br />
        <input type='radio' name='listingPrice' id='100k' value='100k' />
        <label for='100k'>$100,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='200k' value='200k' />
        <label for='200k'>$200,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='300k' value='300k' />
        <label for='300k'>$300,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='400k' value='400k' />
        <label for='400k'>$400,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='500k' value='500k' />
        <label for='500k'>$500,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='600k' value='600k' />
        <label for='600k'>$600,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='700k' value='700k' />
        <label for='700k'>$700,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='800k' value='800k' />
        <label for='800k'>$800,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='900k' value='900k' />
        <label for='900k'>$900,000+</label>
        <br />
        <input type='radio' name='listingPrice' id='1m' value='1m' />
        <label for='1m'>$1,000,000+</label>
        <br />
      </div>
    </Fragment>
  );
};

export default Price;
