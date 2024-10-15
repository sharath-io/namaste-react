import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId)

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
  
  const recommended =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log('recommended: ',recommended);

  return (
    <div key={id} className="menu-card">
      <h1>Name of the restaurant :{name}</h1>
      <div className="items-card">
        <h2>City: {city}</h2>
        <p>Cuisines: {cuisines.join(", ")}</p>
        <p>{isOpen ? "Opened" : "Closed"}</p>
        <p>{costForTwoMessage}</p>
        <p>
          ❇️ {avgRating} ({totalRatingsString} ): {}
        </p>
        <h2>Recommended : ({recommended?.length})</h2>
        <ul>
          {recommended.map((item) => (
            <li key={item?.card?.info?.id}>
              <div className="item-card">
                <div className="item-details">

                  <p>{item?.card?.info?.isVeg == 1 ? "🟢" : "🔴"}</p>
                  <h3> {item?.card?.info?.name}</h3>
                  <p>price : {item?.card?.info?.price / 100}</p>
                  </div>
                  <div>
                    <button className="add-btn">Add</button>
                  </div>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
