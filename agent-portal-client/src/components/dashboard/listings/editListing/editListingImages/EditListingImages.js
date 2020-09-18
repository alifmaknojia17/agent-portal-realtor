import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  listingImages,
  deleteImage,
  loadListingImages,
} from '../../../../../actions/listings';
import PropTypes from 'prop-types';

const EditListingImages = ({
  listingId,
  listingImages,
  deleteImage,
  history,
  img: { images },
}) => {
  useEffect(() => {
    loadListingImages(listingId);
  }, [loadListingImages]);

  const imagesDB = [];
  images.forEach((image) => {
    if (image.listing === listingId) {
      imagesDB.push({
        id: image._id,
        imageString: image.image,
      });
    }
  });

  //setting state with the upload files
  const [imagesState, setImages] = useState();
  const onListingImagesChange = (e) => {
    setImages(e.target.files);
  };

  //when save image button is click
  const onSaveImagesBtnClick = (e) => {
    const data = new FormData();
    for (var i = 0; i < imagesState.length; i++) {
      data.append('image', imagesState[i]);
    }
    listingImages(data, listingId, history);
  };

  //when delete image button is clicked
  const onDeleteImageBtnClicked = (id) => {
    deleteImage(id, listingId, history);
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
          {imagesDB.length > 0 &&
            imagesDB.map((image) => {
              return (
                <div className='edit-images-container'>
                  <img
                    src={`data:image/jpeg;base64,${image.imageString}`}
                    alt={`building`}
                  />
                  <button onClick={(e) => onDeleteImageBtnClicked(image.id)}>
                    <i className='fa fa-trash'></i>
                  </button>
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
  loadListingImages: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  img: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  img: state.allListings,
});

export default connect(mapStateToProps, {
  listingImages,
  loadListingImages,
  deleteImage,
})(withRouter(EditListingImages));
