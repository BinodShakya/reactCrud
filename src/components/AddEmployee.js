import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const AddEmployee = (props) => {
  const initialEmployeeState = {
    id: null,
    first_name: "",
    last_name: "",
    password: "",
    username: "",
    role: "User",
    published: false,
  };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
    console.log(employee);
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.create(employee)
      .then((response) => {
        setEmployee({
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          password: response.data.password,
          username: response.data.username,
          published: response.data.published,
          role: "User",
        });
        setSubmitted(true);
        props.history.push("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newEmployee = () => {
    setEmployee(initialEmployeeState);
    setSubmitted(false);
  };

  return (
    <React.Fragment>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEmployee}>
            Add
          </button>
        </div>
      ) : (
        <div className="w-full max-w-sm container mt-20 mx-auto">
          <form onSubmit={saveEmployee}>
            <div className="w-full mb-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="first_name"
              >
                First Name of employee
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                name="first_name"
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Enter first name"
              />
            </div>
            <div className="w-full mb-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="last_name"
              >
                Last Name of employee
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                name="last_name"
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Enter last name"
              />
            </div>
            <div className="w-full mb-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="username"
              >
                UserName of employee
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
                Address of employee
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                name="password"
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Enter password"
              />
            </div>
            {/*<div className="w-full mb-5">*/}
            {/*    <label*/}
            {/*        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"*/}
            {/*        htmlFor="location"*/}
            {/*    >*/}
            {/*        Location*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"*/}
            {/*        value={location}*/}
            {/*        onChange={(e) => setLocation(e.target.value)}*/}
            {/*        type="text"*/}
            {/*        placeholder="Enter location"*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div className="w-full mb-5">*/}
            {/*    <label*/}
            {/*        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"*/}
            {/*        htmlFor="designation"*/}
            {/*    >*/}
            {/*        Designation*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"*/}
            {/*        value={designation}*/}
            {/*        onChange={(e) => setDesignation(e.target.value)}*/}
            {/*        type="text"*/}
            {/*        placeholder="Enter designation"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Employee
              </button>
            </div>
            <div className="text-center mt-4 text-gray-500">
              <Link to="/home">Cancel</Link>
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};
export default AddEmployee;
