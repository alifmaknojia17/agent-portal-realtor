import React, { Fragment } from 'react';

const PropertyNearbySchool = ({ formData, onPropertyNearbySchoolChange }) => {
  const school = { ...formData };
  return (
    <Fragment>
      <div className='property-nearby-school' id='nearbySchool'>
        <p>
          <strong>Nearby School: </strong>
        </p>
        <input
          placeholder='School name'
          name='schoolName'
          value={school.schoolName}
          onChange={onPropertyNearbySchoolChange}
        />
        <input
          placeholder='Grades for ex: PK-3'
          name='grades'
          value={school.grades}
          onChange={onPropertyNearbySchoolChange}
        />
        <input
          placeholder='Distance'
          name='distance'
          value={school.distance}
          onChange={onPropertyNearbySchoolChange}
        />
        <button className='property-nearby-school-btn' id='addSchool'>
          Add School
        </button>
      </div>
    </Fragment>
  );
};

export default PropertyNearbySchool;
