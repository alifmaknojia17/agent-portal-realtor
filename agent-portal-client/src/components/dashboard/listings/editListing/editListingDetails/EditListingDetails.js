import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//action
import { updateListing } from '../../../../../actions/listings';
//component
import PropertyDetails from './editListingDetailsComponent/PropertyDetails';
import PropertyOverview from './editListingDetailsComponent/PropertyOverview';
import PropertyFactsAndFeatures from './editListingDetailsComponent/PropertyFactsAndFeatures';
import PropertyNearbySchool from './editListingDetailsComponent/PropertyNearbySchool';
import PropertyNearbyThings from './editListingDetailsComponent/PropertyNearbyThings';

const EditListingDetails = ({ updateListing, history, listing }) => {
  const listings = { ...listing };
  const listingId = listings._id;
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

  useEffect(() => {
    setFormData({
      street: listings ? listings.propertyDetails.street : '',
      city: listings ? listings.propertyDetails.city : '',
      state: listings ? listings.propertyDetails.state : '',
      zip: listings ? listings.propertyDetails.zip : '',
      price: listings ? listings.propertyDetails.price : '',
      squareFoot: listings ? listings.propertyDetails.squareFoot : '',
      beds: listings ? listings.propertyDetails.beds : '',
      bath: listings ? listings.propertyDetails.bath : '',
      listingType: listings ? listings.propertyDetails.listingType : '',
      overview: listings ? listings.overview : '',
      propertyType: listings ? listings.factAndFeatures.propertyType : '',
      yearBuilt: listings ? listings.factAndFeatures.yearBuilt : '',
      parking: listings ? listings.factAndFeatures.parking : '',
      HOA: listings ? listings.factAndFeatures.HOA : '',
      schoolName: listings ? listings.school.schoolName : '',
      grades: listings ? listings.school.grades : '',
      distance: listings ? listings.school.distance : '',
      things: listings ? listings.nearBy : '',
    });
  }, []);

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
    updateListing(data, listingId, history);
  };

  return (
    <Fragment>
      <div class='edit-listing-details'>
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

EditListingDetails.propTypes = {
  updateListing: PropTypes.func.isRequired,
  // loadListings: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   listings: state.allListings,
// });

export default connect(null, { updateListing })(withRouter(EditListingDetails));
