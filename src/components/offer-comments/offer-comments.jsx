import React from 'react';
import OfferReviewList from '../offer-reviews-list/offer-review-list';
import PropTypes from "prop-types";
import withForm from "../../hocs/withForm";
import OfferAddComment from "../offer-add-comment/offer-add-comment";
import {commentShape} from "../../utils/utils";

const AddOfferCommentWithForm = withForm(OfferAddComment);

const OfferComments = (props) => {
  const {comments} = props;
  if (!comments) {
    return null;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Review{comments.length > 1 && `s`} &middot;{` `}
        <span className="reviews__amount">
          {comments.length === 0 ? `Be the first!` : comments.length}
        </span>
      </h2>
      <OfferReviewList comments={comments} />
      <AddOfferCommentWithForm id = {props.id}/>
    </section>
  );
};

OfferComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)),
  id: PropTypes.number,
  mark: PropTypes.number
};

export default OfferComments;
