import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    const fetchData = async() =>{
        const data = await fetch(MENU_API+resId);
        const dataJSON = await data.json();

        setResInfo(dataJSON.data)
    }

useEffect(()=>{
  fetchData();
}, [])

    return resInfo;
}

export default useRestaurantMenu;