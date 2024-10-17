import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [activeIndex, setActiveIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    id,
    name,
    city,
    cuisines,
    costForTwoMessage,
    isOpen,
    totalRatingsString,
    avgRating,
  } = resInfo?.cards[2]?.card?.card?.info;


  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div key={id} className="w-1/2 mx-auto px-20">
      <h1 className="font-bold text-xl">Name of the restaurant :{name}</h1>
      <div>
        <h2>City: {city}</h2>
        <p>Cuisines: {cuisines.join(", ")}</p>
        <p>{isOpen ? "Opened" : "Closed"}</p>
        <p>{costForTwoMessage}</p>
        <p>
          ❇️ {avgRating} ({totalRatingsString} ): {}
        </p>
        <ul className="my-10">
          {categories?.map((c, index) => (
            <li key={c?.card?.card?.title}>
              <RestaurantCategory
                data={c?.card?.card}
                showItems={activeIndex === index}
                show={() =>
                  setActiveIndex(() => (activeIndex === index ? null : index))
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

/*
<h2 className="font-bold text-lg mt-5">Recommended : ({recommended?.length})</h2>
 <ul>
          {recommended?.map((item) => (
            <li key={item?.card?.info?.id}>
              <div className="border  rounded-lg m-4 flex justify-between items-center p-5">
                <div>
                  <h3>{item?.card?.info?.isVeg == 1 ? "🟢" : "🔴"}  {item?.card?.info?.name}</h3>
                  <p>price : {item?.card?.info?.price / 100}</p>
                  </div>
                  <div className="px-4 py-2 border rounded-lg text-green-900 border-black">
                    <button>Add</button>
                  </div>
                </div>
            </li>
          ))}
        </ul>
*/
