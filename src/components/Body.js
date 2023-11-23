import ResCard from "./ResCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [ restaurantList, setRestaurantList ] = useState(resList);
  const [ searchText, setSearchText ] = useState("");
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
        <button
          className="filter-btn"
          onClick={() => {            
            setRestaurantList(resList);
          }}
        >
          Reset
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
