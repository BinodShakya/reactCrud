import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";

const Login = (props) => {
  if (localStorage.getItem("token") != null) {
    localStorage.removeItem("user");
  }
  const initialEmployeeState = {
    password: "",
    username: "",
  };
  const [employee, setEmployee] = useState(initialEmployeeState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
    console.log(employee);
  };

  const authEmployee = (e) => {
    e.preventDefault();
    EmployeeService.authorize(employee)
      .then((response) => {
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", "Bearer " + token);
        window.location.href = "http://localhost:3000/home";
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="w-full max-w-sm container mt-20 mx-auto">
      <form onSubmit={authEmployee}>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            name="username"
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Enter username"
          />
        </div>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            name="password"
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Enter password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
