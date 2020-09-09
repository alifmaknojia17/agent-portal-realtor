import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listingImages } from '../../../../../actions/listings';
import PropTypes from 'prop-types';

const EditListingImages = ({ listing, listingImages }) => {
  const [images, setImages] = useState();
  const onListingImagesChange = (e) => {
    setImages(e.target.files);
  };
  const onSaveImagesBtnClick = (e) => {
    const data = new FormData();
    for (var i = 0; i < images.length; i++) {
      data.append('image', images[i]);
    }
    listingImages(data, listing._id);
  };
  return (
    <Fragment>
      <div class='edit-listing-images'>
        <div class='image-upload-btn btn-edit-listing-edit'>
          <input
            type='file'
            id='real-file'
            multiple
            onChange={onListingImagesChange}
          />
        </div>
        <div class='listing-images'>
          <img src='../building.JPG' alt='image1' />
          <img src='../building.JPG' alt='image2' />
          <img src='../building.JPG' alt='image3' />
          <img src='../building.JPG' alt='image4' />
          <img src='../building.JPG' alt='image5' />
          <img src='../building.JPG' alt='image6' />
          <img src='../building.JPG' alt='image7' />
          <img src='../building.JPG' alt='image8' />
        </div>
        <button class='btn-image' onClick={onSaveImagesBtnClick}>
          Save
        </button>
      </div>
    </Fragment>
  );
};

EditListingImages.propTypes = {
  listingImages: PropTypes.func.isRequired,
};

export default connect(null, { listingImages })(withRouter(EditListingImages));
