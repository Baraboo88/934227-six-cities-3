import React from 'react';

const MainEmpty = () => {
  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property availbale at the moment</p>
    </div>
  );
};

export default MainEmpty;
