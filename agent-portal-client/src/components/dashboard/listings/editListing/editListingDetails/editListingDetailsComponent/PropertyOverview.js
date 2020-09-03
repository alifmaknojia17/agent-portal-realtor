import React, { Fragment } from 'react';

const PropertyOverview = ({ formData, onPropertyOverviewChange }) => {
  const { overview } = formData;
  return (
    <Fragment>
      <div class='property-overview'>
        <p>
          <strong>Overview: </strong>
        </p>
        <textarea
          class='property-overview-textarea'
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
