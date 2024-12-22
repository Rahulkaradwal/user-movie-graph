import React from "react";
import AddMovie from "../MovieOperations/AddMovie";
import UpdateMovie from "../MovieOperations/UpdateMovie";
import AddUser from "../UserOperations/AddUser";
import UpdateUser from "../UserOperations/UpdateUser";

function OperationsDashboard() {
  return (
    <div className="grid grid-cols-2 h-full  rounded-md overflow-scroll gap-1">
      <div className="flex flex-col gap-1">
        <AddUser />
        <UpdateUser />
      </div>
      <div className="flex flex-col gap-1">
        <AddMovie />
        <UpdateMovie />
      </div>
    </div>
  );
}

export default OperationsDashboard;
