import React from 'react';
import OfferCard from '../offer-card/offer-card';

const OffersList = (props) => {
  const {cards, onCardHover, onHeaderClick, nearPlace} = props;

  return cards.map((card, index) => (
    <OfferCard
      card={card}
      key={index}
      onCardHover={onCardHover}
      onHeaderClick={onHeaderClick}
      nearPlace={nearPlace && nearPlace}
    />
  ));
};

export default OffersList;
