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
          className='property-facts-features-input'
          name='propertyType'
          value={factAndFeatures.propertyType}
          onChange={onPropertyFactsAndFeaturesChange}
        >
          <option className='' value='default'>
            Property Type:
          </option>
          <option className='' value='Single Family'>
            Single Family
          </option>
          <option className='' value='Multi Family'>
            Multi Family
          </option>
          <option className='' value='Condos'>
            Condos
          </option>
          <option className='' value='Apartment'>
            Apartment
          </option>
          <option className='' value='Land'>
            Land
          </option>
          <option className='' value='Town Homes'>
            Town homes
          </option>
        </select>
        <input
          placeholder='year built'
          name='yearBuilt'
          value={factAndFeatures.yearBuilt}
          onChange={onPropertyFactsAndFeaturesChange}
        />
        <input
          className=''
          placeholder='parking'
          name='parking'
          value={factAndFeatures.parking}
          onChange={onPropertyFactsAndFeaturesChange}
        />
        <input
          className=''
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
