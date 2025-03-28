import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessToast, showErrorToast } from "./utils/toastUtils";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";

const BASE_URL = "https://reqres.in/api";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page) => {
    try {
      const res = await axios.get(`${BASE_URL}/users?page=${page}`);
      setUsers(res.data.data);
      setTotalPages(res.data.total_pages);
    } catch (error) {
      showErrorToast("Failed to fetch users!");
    }
  };

  const handleUpdate = async (e, updatedUserId, updatedUser) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${BASE_URL}/users/${updatedUserId}`, updatedUser);

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          Number(user.id) === Number(updatedUserId) ? { ...user, ...updatedUser } : user
        )
      );

      showSuccessToast("User Updated Successfully!");
      setTimeout(() => navigate("/users"), 500);
    } catch (error) {
      console.error("Update Error:", error);
      showErrorToast("Failed to update user!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

      if (users.length === 1 && page > 1) {
        setPage(page - 1);
      }

      showSuccessToast("User Deleted Successfully!");
    } catch (error) {
      showErrorToast("Failed to Delete User!");
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/users"
          element={<UserList users={users} handleDelete={handleDelete} page={page} setPage={setPage} totalPages={totalPages} />}
        />
        <Route path="/edit/:id" element={<EditUser handleUpdate={handleUpdate} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
