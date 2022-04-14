import React from "react";
import './SingleRoomInformation.css';

const SingleRoomInformation = ({ single }) => {
  const { image, name, review, rating } = single;
  return (
    <div>
      <div className="information">
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h3>Review - {review}</h3>
        <h4>Rating - {rating}</h4>
      </div>
    </div>
  );
};

export default SingleRoomInformation;
