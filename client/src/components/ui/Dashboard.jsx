import React from "react";
import OperationsDashboard from "./OperationsDashboard";
import User from "../GetOperations/User";

function Dashboard({ view }) {
  return (
    <div className=" p-2  rounded-md ">
      {view === "getData" ? <User /> : <OperationsDashboard />}
    </div>
  );
}

export default Dashboard;
