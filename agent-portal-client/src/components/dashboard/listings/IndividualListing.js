import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { deleteListing } from '../../../actions/listings';
import Modal from './modal/ListingModal';
import ModalListingDetails from './modal/modalItems/modalDetails/ModalListingDetails';
import ModalListingImages from './modal/modalItems/modalImages/ModalListingImages';

const IndividualListing = ({ listing, deleteListing }) => {
  const onDeleteListingBtnClick = (e) => {
    console.log('button clicked', listing._id);
    deleteListing(listing._id);
  };

  const onIndividualListingClick = () => {
    openModal();
  };

  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <Fragment>
      <Modal ref={modalRef}>
        <div className='modal-listing'>
          <ModalListingDetails listing={listing} />
          <ModalListingImages />
          <button
            className='close-modal-listing'
            onClick={() => modalRef.current.close()}
          >
            <i class='fa fa-window-close'></i>
          </button>
        </div>
      </Modal>

      <div className='individual-listing' onClick={onIndividualListingClick}>
        <img
          src='./building.JPG'
          alt='Building Image'
          width='400px'
          height='250px'
        />
        <div className='listing-details'>
          <p>
            <span className='price'>
              <NumberFormat
                value={listing.propertyDetails.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>
            <span className='detail' id='beds'>
              {listing.propertyDetails.beds} bds
            </span>
            <span className='detail' id='baths'>
              {listing.propertyDetails.bath} ba
            </span>
            <span className='detail' id='sqft'>
              {listing.propertyDetails.squareFoot} sqft
            </span>
          </p>
          <p>
            <span>
              {listing.propertyDetails.street}, {<br />}{' '}
              {listing.propertyDetails.city}, {listing.propertyDetails.state}{' '}
              {listing.propertyDetails.zip}
            </span>
          </p>
          <p>
            <span id='listing-type'>
              <i className='fa fa-circle'></i>
              House for {listing.propertyDetails.listingType}
            </span>
            <span className='listing-btns'>
              <Link
                to={{
                  pathname: '/edit-listing',
                  listing,
                }}
                className='btn-listing'
                id='edit-listing'
              >
                <i className='fa fa-edit'></i>
              </Link>
              <button className='btn-listing' onClick={onDeleteListingBtnClick}>
                <i className='fa fa-trash'></i>
              </button>
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

IndividualListing.propTypes = {
  deleteListing: PropTypes.func.isRequired,
};

export default connect(null, { deleteListing })(withRouter(IndividualListing));
