import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-4 p-4 shadow-lg shadow-grey-50 bg-white">
      <Link to="/"> Home</Link>
      <Link to="/completed-tasks">Completed Tasks</Link>
    </div>
  );
}

export default Navbar;
