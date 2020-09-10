import React, { Fragment } from 'react';

const ModalListingImages = ({ images }) => {
  return (
    <Fragment>
      <div className='modal-listing-image'>
        <div className='modal-images'>
          {images.map((image) => {
            return (
              <div className='modal-image'>
                <img
                  src={`./listingImages/${image}`}
                  alt={`Building${image}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ModalListingImages;
