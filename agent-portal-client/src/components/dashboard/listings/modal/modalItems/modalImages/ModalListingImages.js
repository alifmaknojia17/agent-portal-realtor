import React, { Fragment } from 'react';

const ModalListingImages = ({ images }) => {
  console.log(images);
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
                  // width='700px'
                  // height='300px'
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
