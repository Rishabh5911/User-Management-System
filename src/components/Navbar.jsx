import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
      <h1 className="text-lg font-bold cursor-pointer">User Management</h1>
      <div className="space-x-4">
        <Link className="hover:text-black" to="/users">
          Users
        </Link>
        <Link className="hover:text-black" to="/">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


