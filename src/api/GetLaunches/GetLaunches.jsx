import axios from 'axios'
// import { useState } from 'react';


// Change below function to API call
export const GetLaunchesAPI = async () => {
  // const [loading, setLoading] = useState(false);
  
  try {
    // setLoading(true);
    const {data} = await axios("https://api.spacexdata.com/v3/launches?filter=flight_number,launch_year,mission_name,launch_date_utc,rocket/rocket_name")
    // setLoading(false);
    return data;
  } catch (error) {
    // setLoading(false);
    console.log(error);
  }
};
