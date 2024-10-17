import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => setShowItems(!showItems);

  return (
    <div className=" mb-5  border-gray-300 border-b-8 py-3">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <h1 className="font-bold text-lg"  >
          {data?.title} ({data?.itemCards?.length})
        </h1>
        <div>⬇️</div>
      </div>
      <ul>
        {data?.itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
           {showItems &&  <ItemList data={item?.card?.info} /> }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantCategory;
