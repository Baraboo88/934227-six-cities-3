import React from 'react';
import PropTypes from 'prop-types';

const OffersMap = (props) =>{
  const {reference, nearPlace} = props;
  return (
    <section
      ref={reference}
      className={`${nearPlace ? `property__map` : `cities__map`} map`}
    />
  );
};


OffersMap.propTypes = {
  reference: PropTypes.object.isRequired,
  nearPlace: PropTypes.bool
};

export default OffersMap;
