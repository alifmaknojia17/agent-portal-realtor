import React, { Fragment, useState } from 'react';

const FactAndFeatures = ({ formData, onPropertyFactsAndFeaturesChange }) => {
  const factAndFeatures = { ...formData };
  return (
    <Fragment>
      <div className='property-facts-features'>
        <p>
          <strong>Facts & Features: </strong>
        </p>
        <select
          name='propertyType'
          value={factAndFeatures.propertyType}
          onChange={onPropertyFactsAndFeaturesChange}
        >
          <option value='default'>Property Type:</option>
          <option value='singleFamily'>Single Family</option>
          <option value='multiFamily'>Multi Family</option>
          <option value='condos'>Condos</option>
          <option value='apartment'>Apartment</option>
          <option value='land'>Land</option>
          <option value='townHomes'>Town homes</option>
        </select>
        <input
          placeholder='year built'
          name='yearBuilt'
          value={factAndFeatures.yearBuilt}
          onChange={onPropertyFactsAndFeaturesChange}
        />
        <input
          placeholder='parking'
          name='parking'
          value={factAndFeatures.parking}
          onChange={onPropertyFactsAndFeaturesChange}
        />
        <input
          placeholder='HOA per month'
          name='HOA'
          value={factAndFeatures.HOA}
          onChange={onPropertyFactsAndFeaturesChange}
        />
      </div>
    </Fragment>
  );
};

export default FactAndFeatures;
