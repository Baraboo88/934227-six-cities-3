import React from 'react';
import OfferCard from '../offer-card/offer-card';
import withHoverItem from "../../hocs/withHoverItem";

const OffersList = (props) => {
  const {cards, onCardHover, onCardUnHover, onHeaderClick, nearPlace} = props;
  const OfferCardWiHoverItem = withHoverItem(OfferCard, onCardHover, onCardUnHover);
  return cards.map((card, index) => (
    <OfferCardWiHoverItem
      card={card}
      key={index}
      onHeaderClick={onHeaderClick}
      nearPlace={nearPlace}
    />
  ));
};

export default OffersList;
