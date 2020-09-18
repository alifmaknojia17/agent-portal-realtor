import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//action
import { updateListing, loadListings } from '../../../../../actions/listings';
//component
import PropertyDetails from './editListingDetailsComponent/PropertyDetails';
import PropertyOverview from './editListingDetailsComponent/PropertyOverview';
import PropertyFactsAndFeatures from './editListingDetailsComponent/PropertyFactsAndFeatures';
import PropertyNearbySchool from './editListingDetailsComponent/PropertyNearbySchool';
import PropertyNearbyThings from './editListingDetailsComponent/PropertyNearbyThings';

const EditListingDetails = ({
  updateListing,
  loadListings,
  history,
  listingId,
  listings: { allListings },
}) => {
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

  useMemo(() => {
    const listings = allListings.filter((listing) => {
      if (listing._id === listingId) {
        setFormData({
          street: listing.propertyDetails.street,
          city: listing.propertyDetails.city,
          state: listing.propertyDetails.state,
          zip: listing.propertyDetails.zip,
          price: listing.propertyDetails.price,
          squareFoot: listing.propertyDetails.squareFoot,
          beds: listing.propertyDetails.beds,
          bath: listing.propertyDetails.bath,
          listingType: listing.propertyDetails.listingType,
          overview: listing.overview,
          propertyType: listing.factAndFeatures.propertyType,
          yearBuilt: listing.factAndFeatures.yearBuilt,
          parking: listing.factAndFeatures.parking,
          HOA: listing.factAndFeatures.HOA,
          schoolName: listing.school.schoolName,
          grades: listing.school.grades,
          distance: listing.school.distance,
          things: listing.nearBy,
        });
      }
    });
  }, [allListings]);

  useEffect(() => {
    loadListings();
  }, [loadListings]);

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
      <div className='edit-listing-details'>
        <div className='all-details'>
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
        <button className='btn-save' onClick={onSavePropertyDetailsClick}>
          Save
        </button>
      </div>
    </Fragment>
  );
};

EditListingDetails.propTypes = {
  updateListing: PropTypes.func.isRequired,
  loadListings: PropTypes.func.isRequired,
  listings: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  listings: state.allListings,
});

export default connect(mapStateToProps, { updateListing, loadListings })(
  withRouter(EditListingDetails)
);
