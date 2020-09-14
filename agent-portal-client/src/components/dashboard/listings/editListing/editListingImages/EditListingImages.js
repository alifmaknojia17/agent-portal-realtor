import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listingImages } from '../../../../../actions/listings';
import PropTypes from 'prop-types';

const EditListingImages = ({ listing, listingImages, imagesDB, history }) => {
  const [images, setImages] = useState();
  const onListingImagesChange = (e) => {
    setImages(e.target.files);
  };
  const onSaveImagesBtnClick = (e) => {
    const data = new FormData();
    for (var i = 0; i < images.length; i++) {
      data.append('image', images[i]);
    }
    listingImages(data, listing._id, history);
  };
  return (
    <Fragment>
      <div className='edit-listing-images'>
        <div className='image-upload-btn btn-edit-listing-edit'>
          <input
            type='file'
            id='real-file'
            multiple
            onChange={onListingImagesChange}
          />
        </div>
        <div className='listing-images'>
          {imagesDB.map((image) => {
            return (
              <div className='edit-images-container'>
                <img
                  src={`data:image/jpeg;base64,${image}`}
                  alt={`building${image}`}
                />
              </div>
            );
          })}
        </div>
        <button className='btn-image' onClick={onSaveImagesBtnClick}>
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
