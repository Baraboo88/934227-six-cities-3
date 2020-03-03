import React from 'react';
import PropTypes from 'prop-types';
import OffersCityItem from '../offers-city-item/offers-city-item';
import withHoverItem from "../../hocs/withHoverItem";
const OffersCityItemWithHover = withHoverItem(OffersCityItem);

const OffersCities = (props) => {
  const {citiesNames, onCityNameClick, activeCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {citiesNames && citiesNames.map((cityName, index) => (
        <OffersCityItemWithHover
          key={`${cityName.name} - ${index}`}
          cityName={cityName}
          activeCity={activeCity}
          onCityNameClick={onCityNameClick}
        />
      ))}
    </ul>
  );
};

OffersCities.propTypes = {
  citiesNames: PropTypes.arrayOf(PropTypes.object),
  onCityNameClick: PropTypes.func,
  activeCity: PropTypes.object
};

export default OffersCities;
