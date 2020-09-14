import React, { Fragment } from 'react';

const PropertyOverview = ({ formData, onPropertyOverviewChange }) => {
  const { overview } = formData;
  return (
    <Fragment>
      <div className='property-overview'>
        <p>
          <strong>Overview: </strong>
        </p>
        <textarea
          name='overview'
          placeholder='Describe the property'
          value={overview}
          onChange={onPropertyOverviewChange}
        ></textarea>
      </div>
    </Fragment>
  );
};

export default PropertyOverview;
