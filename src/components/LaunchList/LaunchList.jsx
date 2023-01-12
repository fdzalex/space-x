import React from "react";
import { LaunchItem } from "../LaunchItem";
import './LaunchList.css'

export const LaunchList = ({ items, years, filter, sort }) => {
  let filteredItems = [...items];

  if (filter !== "") {
    //write filter function below, DONE
    filteredItems = filteredItems.filter((item) => {
      return filter === item.launch_year
    })
  }

  //Bug in the sorting function below (Haven't visualised what the bug is yet. Do a third run.) , DONE
  const launches = filteredItems.sort((a, b) => {
    // console.log(a.launch_date_utc) , DONE
    // console.log(Date(a.launch_date_utc)) , DONE
    
    const x = new Date(a.launch_date_utc);
    const y = new Date(b.launch_date_utc);
    return sort ? y - x : x - y;
  });

  return (
    <ul className="item-list">
      {/* {console.log('🚀🚀 years', years)} , DONE */}
      {launches.map((item, index) => {
        return <LaunchItem key={index} item={item} index={index} />;
      })}
    </ul>
  );
};
