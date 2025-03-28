import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { showErrorToast } from "../utils/toastUtils";

const BASE_URL = "https://reqres.in/api";

function EditUser({ handleUpdate }) {
  const { id } = useParams();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/${id}`)
      .then((res) => setUser(res.data.data))
      .catch(() => showErrorToast("Error fetching user!"));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={(e) => handleUpdate(e, id, user)}
        className="p-6 bg-gray-100 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl mb-4 text-center font-bold">Edit User</h2>
        <input
          className="block w-full p-2 mb-3 border rounded"
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          required
        />
        <input
          className="block w-full p-2 mb-3 border rounded"
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          required
        />
        <input
          className="block w-full p-2 mb-3 border rounded"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUser;
