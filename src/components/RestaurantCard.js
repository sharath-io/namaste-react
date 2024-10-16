import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.info;
  return (
    <div  className="m-2 px-3 py-2  w-80">
      <img
      className="w-full mb-3 rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="px-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>❇️ {avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>

      </div>
      
    </div>
  );
};

export default RestaurantCard;
