import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

const EditEmployee = (props) => {
  const initialEmployeeState = {
    id: null,
    first_name: "",
    last_name: "",
    password: "",
    username: "",
    role: "",
    published: false,
  };
  const [currentEmployee, setCurrentEmployee] = useState(initialEmployeeState);
  const [message, setMessage] = useState("");

  const getEmployee = (id) => {
    EmployeeService.get(id)
      .then((response) => {
        setCurrentEmployee(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const updatePublished = (status) => {
    var data = {
      id: currentEmployee.id,
      first_name: currentEmployee.first_name,
      last_name: currentEmployee.last_name,
      password: currentEmployee.password,
      username: currentEmployee.username,
      role: status ? "Admin" : "User",
      published: status,
    };

    EmployeeService.update(currentEmployee.id, data)
      .then((response) => {
        setCurrentEmployee({ ...currentEmployee, published: status });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.update(currentEmployee.id, currentEmployee)
      .then((response) => {
        console.log(response.data);
        setMessage("The Employee was updated successfully!");
        props.history.push("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteEmployee = () => {
    EmployeeService.remove(currentEmployee.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/home");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentEmployee ? (
        <div className="edit-form">
          <h4>Employee Details</h4>
          <div className="w-full max-w-sm container mt-20 mx-auto">
            <form onSubmit={updateEmployee}>
              <div className="w-full mb-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={currentEmployee.first_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full mb-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first_name"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={currentEmployee.last_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full mb-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first_name"
                >
                  User Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                  type="text"
                  id="username"
                  name="username"
                  value={currentEmployee.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full mb-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first_name"
                >
                  Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                  type="text"
                  id="password"
                  name="password"
                  value={currentEmployee.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="w-full  mb-5">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  <strong>Status:</strong>
                </label>
                {currentEmployee.published ? "Admin" : "User"}
              </div>

              {currentEmployee.published ? (
                <div className="flex items-center justify-between">
                  <button
                    className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline"
                    onClick={() => updatePublished(false)}
                  >
                    Make User
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <button
                    className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline"
                    onClick={() => updatePublished(true)}
                  >
                    Make Admin
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between">
                <button
                  className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline"
                  onClick={deleteEmployee}
                >
                  Delete
                </button>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline"
                >
                  Update
                </button>
              </div>
              <p>{message}</p>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Employee Detail...</p>
        </div>
      )}
    </div>
  );
};
export default EditEmployee;
