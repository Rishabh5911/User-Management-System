import React from "react";
import { Link } from "react-router-dom";

function UserList({ users, handleDelete, page, setPage, totalPages }) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Users List</h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">No Users Found!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-lg bg-white text-center">
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-20 h-20 rounded-full mx-auto mb-2"
              />
              <h3 className="text-lg font-semibold">{user.first_name} {user.last_name}</h3>
              <p className="text-gray-500">{user.email}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {users.length > 0 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default UserList;
