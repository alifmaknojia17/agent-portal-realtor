import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//action
import { createListing } from '../../../../actions/listings';
//component
import PropertyDetails from './addListingDetailsComponent/PropertyDetails';
import PropertyOverview from './addListingDetailsComponent/PropertyOverview';
import PropertyFactsAndFeatures from './addListingDetailsComponent/PropertyFactsAndFeatures';
import PropertyNearbySchool from './addListingDetailsComponent/PropertyNearbySchool';
import PropertyNearbyThings from './addListingDetailsComponent/PropertyNearbyThings';

const AddListingDetails = ({ createListing, history }) => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    price: '',
    squareFoot: '',
    beds: '',
    bath: '',
    listingType: '',
    overview: '',
    propertyType: '',
    yearBuilt: '',
    parking: '',
    HOA: '',
    schoolName: '',
    grades: '',
    distance: '',
    things: '',
  });

  const data = {
    propertyDetails: {
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      price: formData.price,
      squareFoot: formData.squareFoot,
      beds: formData.beds,
      bath: formData.bath,
      listingType: formData.listingType,
    },
    overview: formData.overview,
    factAndFeatures: {
      propertyType: formData.propertyType,
      yearBuilt: formData.yearBuilt,
      parking: formData.parking,
      HOA: formData.HOA,
    },
    school: {
      schoolName: formData.schoolName,
      grades: formData.grades,
      distance: formData.distance,
    },
    nearBy: formData.things,
  };

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSavePropertyDetailsClick = (e) => {
    createListing(data, history);
  };

  return (
    <Fragment>
      <div class='add-listing-details'>
        <div class='all-details'>
          <PropertyDetails
            formData={formData}
            onPropertyDetailsChange={onInputChange}
          />
          <PropertyOverview
            formData={formData}
            onPropertyOverviewChange={onInputChange}
          />
          <PropertyFactsAndFeatures
            formData={formData}
            onPropertyFactsAndFeaturesChange={onInputChange}
          />
          <PropertyNearbySchool
            formData={formData}
            onPropertyNearbySchoolChange={onInputChange}
          />
          <PropertyNearbyThings
            formData={formData}
            onPropertyNearbyThingsChange={onInputChange}
          />
        </div>
        <button class='btn-save' onClick={onSavePropertyDetailsClick}>
          Save
        </button>
      </div>
    </Fragment>
  );
};

AddListingDetails.propTypes = {
  createListing: PropTypes.func.isRequired,
};

export default connect(null, { createListing })(withRouter(AddListingDetails));
