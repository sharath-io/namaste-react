import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


const AppLayout = () => {

  const [username, setUserName] = useState();

  useEffect(()=>{
    const data ={
      name:'Sharath ESR'
    }
setUserName(data.name)
  },[])





  return (
    <UserContext.Provider value={{loggedInUser:username, setUserName}}>
    <div className="app">

      <Header />
 
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },{
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
