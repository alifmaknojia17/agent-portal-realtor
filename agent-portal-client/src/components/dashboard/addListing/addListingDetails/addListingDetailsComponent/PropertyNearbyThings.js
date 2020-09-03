import React, { Fragment } from 'react';

const PropertyNearbyThings = ({ formData, onPropertyNearbyThingsChange }) => {
  const nearBy = { ...formData };
  return (
    <Fragment>
      <div class='property-nearby-things'>
        <p>
          <strong>Nearby Things: </strong>
        </p>
        <input
          class='property-nearby-things-input'
          placeholder='Add nearby things for ex: Target, Heb, etc'
          name='things'
          value={nearBy.things}
          onChange={onPropertyNearbyThingsChange}
        />
      </div>
    </Fragment>
  );
};

export default PropertyNearbyThings;
