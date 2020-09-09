import React, { Fragment } from 'react';

const EditListingImages = () => {
  return (
    <Fragment>
      <div class='edit-listing-images'>
        <div class='image-upload-btn btn-edit-listing-edit'>
          <input type='file' id='real-file' hidden />
          <button type='button' class='btn-image' id='custom-button'>
            Edit Image
          </button>
          <span id='custom-text'>No file chosen, yet.</span>
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
        <button class='btn-image'>Save</button>
      </div>
    </Fragment>
  );
};

export default EditListingImages;
