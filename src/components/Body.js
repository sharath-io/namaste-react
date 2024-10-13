import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListR, setFilteredListR] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const dataJSON = await data.json();

    console.log('for all restaurants: ', dataJSON)
    console.log('coming....', dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    
    setListOfRestaurants(dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setFilteredListR(dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
  };  

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="input">
        <input
          type="text"
          className="input-search"
          value={searchText}
          placeholder="search restaurants"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
         className="btn"
          onClick={() => {
            const filteredRes = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText)
            );
            setFilteredListR(filteredRes);
          }}
        >
          Input
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.2
            );
            setFilteredListR(filteredList);
          }}
        >
          Top Rated Restaurants more than 4.2 rating
        </button>
      </div>
      <div className="res-container">
        {filteredListR?.map((restaurant) => {
          return (
            <Link key={restaurant?.info?.id} to={`/restaurant/${restaurant?.info?.id}`}><RestaurantCard  resData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
