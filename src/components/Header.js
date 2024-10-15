import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between mb-5 shadow-lg">
      <div>
        <img className="w-28" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex m-5 font-semibold	text-lg	">
          <li className="px-8 my-2">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-8 my-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-8 my-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-8 my-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-8 my-2">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
