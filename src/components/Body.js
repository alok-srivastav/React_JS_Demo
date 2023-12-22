import ResCard from "./ResCard";
import { useState } from "react";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ restaurantList, setRestaurantList ] = useState(resList);
  const [ searchText, setSearchText ] = useState("");
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) {
    return <h1>Looks like you are offline !! Please check your internet connection. </h1>;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (rl) => rl.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        
        <input
          type=""
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            {
              console.log(searchText);
            }
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {            
            setRestaurantList(resList);
          }}
        >
          Reset
        </button>
      </div>
      <div className="resContainer">
        {restaurantList.map((res, index) => 
          <ResCard key={res.info.id} resData={res} />
        )}
      </div>
    </div>
  );
};

export default Body;
