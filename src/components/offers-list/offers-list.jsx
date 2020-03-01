import React from 'react';
import OfferCard from '../offer-card/offer-card';
import withHoverItem from "../../hocs/withHoverItem";

const OfferCardWiHoverItem = withHoverItem(OfferCard);

const OffersList = (props) => {
  const {cards, onCardHover, onCardUnHover, onHeaderClick, nearPlace} = props;
  return cards.map((card, index) => (
    <OfferCardWiHoverItem
      onHover = {onCardHover}
      onUnHover = {onCardUnHover}
      card={card}
      key={index}
      onHeaderClick={onHeaderClick}
      nearPlace={nearPlace}
    />
  ));
};

export default OffersList;
