import React, { Fragment } from 'react';

const PropertyNearbySchool = ({ formData, onPropertyNearbySchoolChange }) => {
  const school = { ...formData };
  return (
    <Fragment>
      <div class='property-nearby-school' id='nearbySchool'>
        <p>
          <strong>Nearby School: </strong>
        </p>
        <input
          class='property-nearby-school-input'
          placeholder='School name'
          name='schoolName'
          value={school.schoolName}
          onChange={onPropertyNearbySchoolChange}
        />
        <input
          class='property-nearby-school-input'
          placeholder='Grades for ex: PK-3'
          name='grades'
          value={school.grades}
          onChange={onPropertyNearbySchoolChange}
        />
        <input
          class='property-nearby-school-input'
          placeholder='Distance'
          name='distance'
          value={school.distance}
          onChange={onPropertyNearbySchoolChange}
        />
        <button class='property-nearby-school-btn' id='addSchool'>
          Add School
        </button>
      </div>
    </Fragment>
  );
};

export default PropertyNearbySchool;
