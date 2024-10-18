const ItemList = ({ data, dummy }) => {
  console.log('Items list console : ', dummy)

  return (
    <div
      className="px-4 py-2 flex justify-between items-center border-gray-300 border-b-2"
      key={data.id}
    >
      <div className="w-9/12">
        <h1>{data?.isVeg == 1 ? "🟢" : "🔺"}</h1>
        <h1 className="font-bold"> {data?.name}</h1>
        <p>₹ {data?.price / 100}</p>
        <p className="font-bold">
          ❇️{" "}
          <span className="text-green-600">
            {data?.ratings?.aggregatedRating?.rating}
          </span>{" "}
          ({data?.ratings?.aggregatedRating?.ratingCountV2})
        </p>
        <p className="mt-2">
          <span className="font-semibold">Description :</span>{" "}
          {data?.description}
        </p>
      </div>
      <div className="items-center w-3/12 mb-2">
        <div className="absolute mx-5 mt-[68px]">
          <button className="text-green-600 bg-white px-5 py-1 rounded-lg border border-gray-400 w-20 font-bold ml-5 mt-2">
            Add{" "}
          </button>
        </div>
        <img
          alt="No image"
          className="w-full"
          
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            data?.imageId
          }
        />
      </div>
    </div>
  );
};

export default ItemList;
