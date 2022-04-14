import React from 'react';
import { Navigate } from 'react-router-dom';
import './Information.css';

const Information = ({room}) => {
    const {image,name,review,rating} = room;
    return (
        <div className='information-container'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>Review - {review}</h3>
            <h4>Rating - {rating}</h4>
            
            <button onClick={() => Navigate("/singleRoom")}>Book Now</button>
        </div>
    );
};

export default Information;