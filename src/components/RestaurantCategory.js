import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, show,dummy }) => {
  // const [showItems, setShowItems] = useState(false);
  // const handleClick = () => setShowItems(!showItems);
  // lifted the state up => to nearest parent => RestaurantMenu

  return (
    <div className=" mb-5  border-gray-300 border-b-8 py-3">
      <div className="flex justify-between cursor-pointer" onClick={show}>
        <h1 className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length})
        </h1>
        <div>{showItems ? "⬆️" : "⬇️"}</div>
      </div>
      <ul>
        {data?.itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {showItems && <ItemList data={item?.card?.info} dummy={dummy} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantCategory;
