import React from 'react';
import OfferCard from '../offer-card/offer-card';
import withHoverItem from "../../hocs/withHoverItem";

const OfferCardWiHoverItem = withHoverItem(OfferCard);

const OffersList = (props) => {
  const {cards, nearPlace, favorite} = props;
  if (!cards) {
    return null;
  }
  return cards.map((card) => (
    <OfferCardWiHoverItem
      card={card}
      key={card.id}
      nearPlace={nearPlace}
      favorite = {favorite}
    />
  ));
};

export default OffersList;
