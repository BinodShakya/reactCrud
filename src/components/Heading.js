import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {LoginContext} from "../context/LoginContext";

export const Heading = (props) => {
  const { handleLogOut } = useContext(LoginContext);

  const logout = () => {
    localStorage.removeItem("token");
    handleLogOut();
  };

  return (
    <div>
      <div className="flex items-center mt-24 mb-10">
        <div className="flex-grow text-left px-4 py-2 m-2">
          <h5 className="text-gray-900 font-bold text-xl">Employee Listing</h5>
        </div>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/add">
            <button
              style={{ marginRight: "12px" }}
              className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <span className="pl-2">Add Employee</span>
            </button>
          </Link>

          {/*<Link to="/">*/}
          <button
            className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
            onClick={logout}
          >
            <span className="pl-2">Logout</span>
          </button>
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
};
