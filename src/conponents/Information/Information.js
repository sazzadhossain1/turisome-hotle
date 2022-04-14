import React from 'react';
import { Link } from 'react-router-dom';
import './Information.css';

const Information = ({room}) => {
    const {image,name,review,rating} = room;
    return (
        <div className='information-container'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>Review - {review}</h3>
            <h4>Rating - {rating}</h4>
            
            <Link to="/singleRoom"><button className='information-buton'>Book Now</button></Link>
        </div>
    );
};

export default Information;