import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListR, setFilteredListR] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dataJSON = await data.json();

    setListOfRestaurants(
      dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredListR(
      dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline, check your internet connection </h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-5 mt-10">
      <div className="flex justify-center gap-10 mx-auto">

        <input
          type="text"
          className="border border-solid border-black p-3 w-80 rounded-md"
          value={searchText}
          placeholder="search restaurants"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="bg-orange-400 px-8 py-2 rounded-md "
          onClick={() => {
            const filteredRes = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText)
            );
            setFilteredListR(filteredRes);
          }}
        >
          Input
        </button>

        <button
          className="bg-gray-500 px-8 py-2 rounded-md text-white"
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


      <div className="flex flex-wrap gap-2 justify-center mt-5">
        {filteredListR?.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={`/restaurant/${restaurant?.info?.id}`}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>

      
    </div>
  );
};

export default Body;
