import React from "react";
import { Heading } from "./Heading";
import EmployeeList from "./EmployeeList";

export const Home = () => {
  return (
    <div className="container mx-auto">
      {/*<p>*/}
      {/*    <Link to="/login">Logout</Link>*/}
      {/*</p>*/}
      <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
        Simple User CRUD with React Context API and Hooks
      </h3>
      <Heading />
      <h1>List of Employees</h1>
      <EmployeeList />
    </div>
  );
};
