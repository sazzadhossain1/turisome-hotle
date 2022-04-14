import React, { useEffect, useState } from "react";
import SingleRoomInformation from "../../SingleRoomInformation/SingleRoomInformation";
import './SingleRoom.css';

const SingleRoom = () => {
  const [singleRooms, setSingleRooms] = useState([]);
  useEffect(() => {
    fetch("singleroom.json")
      .then((res) => res.json())
      .then((data) => setSingleRooms(data));
  }, []);
  return (
    <div>
      <h1 className="heading">This is Single Room</h1>

      <div className="single-room-details">
        {singleRooms.map((single) => (
          <SingleRoomInformation
            key={single.id}
            single={single}
          ></SingleRoomInformation>
        ))}
      </div>
    </div>
  );
};

export default SingleRoom;
