import React, { useEffect, useState } from "react";
import Information from "../Information/Information";
import Banner from "./Banner/Banner";
import './Home.css';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <div className="grid-container">
      <h1>this is home</h1>
      <div>
        
        <Banner className='banner'></Banner>
        <div className="row room-details">
          {rooms.map((room) => (
            <Information key={room.id} room={room}></Information>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
