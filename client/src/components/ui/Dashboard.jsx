import React from "react";
import OperationsDashboard from "./OperationsDashboard";
import GetOperationsDashboard from "../GetOperations/GetOperationsDashboard";

function Dashboard({ view }) {
  return (
    <div className=" p-2  rounded-md ">
      {view === "getData" ? (
        <GetOperationsDashboard />
      ) : (
        <OperationsDashboard />
      )}
    </div>
  );
}

export default Dashboard;
