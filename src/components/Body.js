import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://namaste-dishes.vercel.app/mockdata.json");

    const dataJSON = await data.json();
    console.log('data json: ', dataJSON);

    console.log('exact path: ', dataJSON.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setListOfRestaurants(dataJSON.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  

  useEffect(() => {
    debugger;
    fetchData();
  }, [])

  

  return (listOfRestaurants.length === 0) ? <Shimmer/> : (
    <div className="body">
      <h1> Displayed Restaurants : {listOfRestaurants.length}</h1>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants more than  4.2 rating
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          console.log('question data: ',restaurant?.info)
         return  <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />}
        )}
      </div>
    </div>
  );
};

export default Body;
