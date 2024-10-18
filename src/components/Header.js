import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const dataContext = useContext(UserContext);

  return (
    <div className="flex justify-between mb-5 shadow-lg">
      <div>
        <img className="w-28" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex m-5 font-semibold	text-lg	">
          <li className="px-8 my-2 hover:text-orange-400 cursor-pointer">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-8 my-2 hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-8 my-2 hover:text-orange-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-8 my-2 hover:text-orange-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-8 my-2 hover:text-orange-400 cursor-pointer">Cart</li>
          
          <button
            className="bg-orange-400 px-8 py-2 rounded-md"
            onClick={() =>
              setBtnName((btnName) =>
                btnName === "Login" ? "Logout" : "Login"
              )
            }
          >
            {btnName}
          </button>
          <li className="px-8 my-2 hover:text-orange-400">{dataContext.loggedInUser}</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
