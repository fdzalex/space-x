import moment from "moment";
import React from "react";
import "./LaunchItem.css"

export const LaunchItem = ({ item, index }) => {
  //missing rocket name DONE
  const { flight_number, mission_name, launch_date_utc, rocket } = item;

  return (
    <li key={index} className='item'>
      <div className="left-side">
        <span className="fligth-id">{`#${flight_number}`}</span>
        <span className="mission-name">{`${mission_name}`}</span>
      </div>
      <div className="right-side">
        <span>
          {/* use moment here DONE*/}
          <span className="launch-date">{moment(launch_date_utc).format('Do MMMM YYYY')}</span>
          {/* <span>{launch_date_utc}</span> PREVIOUS IMPLEMENTATION*/}
          {/* missing rocket name DONE, ideally make it more elegant, no need for the rocket.rocket_name, rocket_name should be enough*/}
          <span className="rocket-name">{`${rocket.rocket_name}`}</span>
        </span>
      </div>
    </li>
  );
};
