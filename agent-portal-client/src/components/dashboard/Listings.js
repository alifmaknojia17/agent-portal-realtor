import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Listings = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className='outter-container'>
        <div className='search'>
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
          <div className='filter-for'>
            <p>Listing Type:</p>
            <input type='radio' name='listingType' value='Sale' />
            <label for='Sale'>For Sale</label>
            <br />
            <input type='radio' name='listingType' value='Rent' />
            <label for='Rent'>For Rent</label>
          </div>
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
          <div className='filter-home-type'>
            <p>Home type:</p>
            <input type='checkbox' name='singleFamily' value='singleFamily' />
            <label for='singleFamily'>Single Family</label>
            <br />
            <input type='checkbox' name='multiFamily' value='multiFamily' />
            <label for='multiFamily'>Multi Family</label>
            <br />
            <input type='checkbox' name='condos' value='condos' />
            <label for='condos'>Condos</label>
            <br />
            <input type='checkbox' name='apartment' value='apartment' />
            <label for='apartment'>Apartment</label>
            <br />
            <input type='checkbox' name='land' value='land' />
            <label for='land'>Lots/Land</label>
            <br />
            <input type='checkbox' name='townhomes' value='townhomes' />
            <label for='townhomes'>Town Homes</label>
            <br />
          </div>
          <div className='filter-btn-div'>
            <button className='btn btn-jumbo-signup btn-save filter-btn'>
              Filter
            </button>
          </div>
        </div>
        <div className='listings'>
          <div className='individual-listing'>
            <img
              src='./building.JPG'
              alt='Building Image'
              width='400px'
              height='250px'
            />
            <div className='listing-details'>
              <p>
                <span className='price'>$239,000</span>
                <span className='detail' id='beds'>
                  6 bds
                </span>
                <span className='detail' id='baths'>
                  4 ba
                </span>
                <span className='detail' id='sqft'>
                  3,604 sqft
                </span>
              </p>
              <p>
                <span>4546 Tilbury Trl, Richmond, TX 77407</span>
              </p>
              <p>
                <span id='listing-type'>
                  <i className='fa fa-circle'></i>
                  House for sale
                </span>
                <span className='listing-btns'>
                  <button className='btn-listing' id='edit-listing'>
                    <i className='fa fa-edit'></i>
                  </button>
                  <button className='btn-listing'>
                    <i className='fa fa-trash'></i>
                  </button>
                </span>
              </p>
            </div>
          </div>

          <div className='individual-listing'>
            <img
              src='./building.JPG'
              alt='Building Image'
              width='400px'
              height='250px'
            />
            <div className='listing-details'>
              <p>
                <span className='price'>$239,000</span>
                <span className='detail' id='beds'>
                  6 bds
                </span>
                <span className='detail' id='baths'>
                  4 ba
                </span>
                <span className='detail' id='sqft'>
                  3,604 sqft
                </span>
              </p>
              <p>
                <span>4546 Tilbury Trl, Richmond, TX 77407</span>
              </p>
              <p>
                <span id='listing-type'>
                  <i className='fa fa-circle'></i>
                  House for sale
                </span>
                <span className='listing-btns'>
                  <button className='btn-listing' id='edit-listing'>
                    <i className='fa fa-edit'></i>
                  </button>
                  <button className='btn-listing'>
                    <i className='fa fa-trash'></i>
                  </button>
                </span>
              </p>
            </div>
          </div>

          <div className='individual-listing'>
            <img
              src='./building.JPG'
              alt='Building Image'
              width='400px'
              height='250px'
            />
            <div className='listing-details'>
              <p>
                <span className='price'>$239,000</span>
                <span className='detail' id='beds'>
                  6 bds
                </span>
                <span className='detail' id='baths'>
                  4 ba
                </span>
                <span className='detail' id='sqft'>
                  3,604 sqft
                </span>
              </p>
              <p>
                <span>4546 Tilbury Trl, Richmond, TX 77407</span>
              </p>
              <p>
                <span id='listing-type'>
                  <i className='fa fa-circle'></i>
                  House for sale
                </span>
                <span className='listing-btns'>
                  <button className='btn-listing' id='edit-listing'>
                    <i className='fa fa-edit'></i>
                  </button>
                  <button className='btn-listing'>
                    <i className='fa fa-trash'></i>
                  </button>
                </span>
              </p>
            </div>
          </div>

          <div className='individual-listing'>
            <img
              src='./building.JPG'
              alt='Building Image'
              width='400px'
              height='250px'
            />
            <div className='listing-details'>
              <p>
                <span className='price'>$239,000</span>
                <span className='detail' id='beds'>
                  6 bds
                </span>
                <span className='detail' id='baths'>
                  4 ba
                </span>
                <span className='detail' id='sqft'>
                  3,604 sqft
                </span>
              </p>
              <p>
                <span>4546 Tilbury Trl, Richmond, TX 77407</span>
              </p>
              <p>
                <span id='listing-type'>
                  <i className='fa fa-circle'></i>
                  House for sale
                </span>
                <span className='listing-btns'>
                  <button className='btn-listing' id='edit-listing'>
                    <i className='fa fa-edit'></i>
                  </button>
                  <button className='btn-listing'>
                    <i className='fa fa-trash'></i>
                  </button>
                </span>
              </p>
            </div>
          </div>

          <div className='individual-listing'>
            <img
              src='./building.JPG'
              alt='Building Image'
              width='400px'
              height='250px'
            />
            <div className='listing-details'>
              <p>
                <span className='price'>$239,000</span>
                <span className='detail' id='beds'>
                  6 bds
                </span>
                <span className='detail' id='baths'>
                  4 ba
                </span>
                <span className='detail' id='sqft'>
                  3,604 sqft
                </span>
              </p>
              <p>
                <span>4546 Tilbury Trl, Richmond, TX 77407</span>
              </p>
              <p>
                <span id='listing-type'>
                  <i className='fa fa-circle'></i>
                  House for sale
                </span>
                <span className='listing-btns'>
                  <button className='btn-listing' id='edit-listing'>
                    <i className='fa fa-edit'></i>
                  </button>
                  <button className='btn-listing'>
                    <i className='fa fa-trash'></i>
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Listings.propTypes = {};

export default Listings;
