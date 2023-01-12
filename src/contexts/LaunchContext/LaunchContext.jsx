import React from "react";
import { GetLaunchesAPI } from "../../api/GetLaunches";

export const launchContextDefaults = {
  listLaunches: Function,
  items: [],
  listYears: Function,
  years: [],
  sort: false,
  setSort: Function,
  filter: "",
  setFilter: Function,
  loading: false,
  setLoading: Function,
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);
  const [years, setYears] = React.useState([]);
  const [sort, setSort] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const listLaunches = React.useCallback(async () => {
    setFilter("");
    setLoading(true);
    console.log("reloaded");
    const responseLaunches = await GetLaunchesAPI();
    const responseYears = responseLaunches.map((launch) => {return launch.launch_year})
    setLoading(false);
    setItems(responseLaunches);
    setYears([...new Set(responseYears)]);
  }, [])

  return (
    <LaunchContext.Provider
      value={{
        listLaunches,
        items,
        years,
        sort,
        setSort,
        filter,
        setFilter,
        loading,
        setLoading,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
