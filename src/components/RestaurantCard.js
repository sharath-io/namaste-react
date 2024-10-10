import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log('here',resData)
  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} key={id}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo / 100}</h4>
    </div>
  );
};

export default RestaurantCard;
