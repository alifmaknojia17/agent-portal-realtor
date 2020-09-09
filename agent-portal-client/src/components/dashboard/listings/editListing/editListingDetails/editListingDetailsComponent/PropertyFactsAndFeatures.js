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
          <option value='Single Family'>Single Family</option>
          <option value='Multi Family'>Multi Family</option>
          <option value='Condos'>Condos</option>
          <option value='Apartment'>Apartment</option>
          <option value='Land'>Land</option>
          <option value='Town Homes'>Town homes</option>
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
