import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Navbar from './Navbar';

const AddListing = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className='add-listing-container'>
        <div className='add-listing-details'>
          <div className='all-details'>
            <div className='property-details'>
              <p>
                <strong>Property Detail: </strong>
              </p>
              <input className='property-details-input' placeholder='Street' />
              <input className='property-details-input' placeholder='City' />
              <input className='property-details-input' placeholder='State' />
              <input
                className='property-details-input'
                placeholder='Zip Code'
              />
              <input className='property-details-input' placeholder='price' />
              <input
                className='property-details-input'
                placeholder='Square foot'
              />
              <input
                className='property-details-input'
                placeholder='Number of Beds'
              />
              <input
                className='property-details-input'
                placeholder='Number of Baths'
              />
              <select className='property-details-input'>
                <option className='' value='default'>
                  Listing Type:
                </option>
                <option className='' value='Sale'>
                  For Sale
                </option>
                <option className='' value='Rent'>
                  For Rent
                </option>
              </select>
            </div>
            <div className='property-overview'>
              <p>
                <strong>Overview: </strong>
              </p>
              <textarea
                className='property-overview-textarea'
                name='description'
                placeholder='Describe the property'
              ></textarea>
            </div>
            <div className='property-facts-features'>
              <p>
                <strong>Facts & Features: </strong>
              </p>
              <select className='property-facts-features-input'>
                <option className='' value='default'>
                  Property Type:
                </option>
                <option className='' value='singleFamily'>
                  Single Family
                </option>
                <option className='' value='multiFamily'>
                  Multi Family
                </option>
                <option className='' value='condos'>
                  Condos
                </option>
                <option className='' value='apartment'>
                  Apartment
                </option>
                <option className='' value='land'>
                  Land
                </option>
                <option className='' value='townHomes'>
                  Town homes
                </option>
              </select>
              <input type='number' placeholder='year built' />
              <input className='' placeholder='parking' />
              <input className='' placeholder='HOA per month' />
            </div>
            <div className='property-nearby-school' id='nearbySchool'>
              <p>
                <strong>Nearby School: </strong>
              </p>
              <input
                className='property-nearby-school-input'
                placeholder='School name'
              />
              <input
                className='property-nearby-school-input'
                placeholder='Grades for ex: PK-3'
              />
              <input
                className='property-nearby-school-input'
                placeholder='Distance'
              />
              <button className='property-nearby-school-btn' id='addSchool'>
                Add School
              </button>
            </div>
            <div className='property-nearby-things'>
              <p>
                <strong>Nearby Things: </strong>
              </p>
              <input
                className='property-nearby-things-input'
                placeholder='Add nearby things for ex: Target, Heb, etc'
              />
            </div>
          </div>
          <button className='btn btn-jumbo-signup btn-save'>Save</button>
        </div>

        <div className='add-listing-images'>
          <div className='image-upload-btn btn-add-listing-edit'>
            <input type='file' id='real-file' hidden />
            <button
              type='button'
              className='btn btn-jumbo-signup'
              id='custom-button'
            >
              Edit Image
            </button>
            <span id='custom-text'>No file chosen, yet.</span>
          </div>
          <div className='listing-images'>
            <img src='./building.JPG' alt='image1' />
            <img src='./building.JPG' alt='image2' />
            <img src='./building.JPG' alt='image3' />
            <img src='./building.JPG' alt='image4' />
            <img src='./building.JPG' alt='image5' />
            <img src='./building.JPG' alt='image6' />
            <img src='./building.JPG' alt='image7' />
            <img src='./building.JPG' alt='image8' />
            <img src='./building.JPG' alt='image9' />
            <img src='./building.JPG' alt='image10' />
            <img src='./building.JPG' alt='image11' />
            <img src='./building.JPG' alt='image12' />
            <img src='./building.JPG' alt='image13' />
            <img src='./building.JPG' alt='image14' />
          </div>
          <button className='btn btn-jumbo-signup btn-save btn-save-image'>
            Save
          </button>
        </div>
      </div>
    </Fragment>
  );
};

AddListing.propTypes = {};

export default AddListing;
