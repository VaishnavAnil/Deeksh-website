// UserManagement.js
import React, { useState, useEffect } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("customer");
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleCreateUser = () => {
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
        clearForm();
      })
      .catch((error) => console.error("Error creating user:", error));
  };

  const handleUpdateUser = () => {
    if (!currentUserId) return;

    fetch(`/users/${currentUserId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(
          users.map((user) => (user.id === currentUserId ? data : user))
        );
        clearForm();
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  const handleDeleteUser = (id) => {
    fetch(`/users/${id}`, { method: "DELETE" })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
        if (currentUserId === id) {
          clearForm();
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  const editUser = (user) => {
    setUsername(user.username);
    setEmail(user.email);
    setRole(user.role);
    setCurrentUserId(user.id);
  };

  const clearForm = () => {
    setUsername("");
    setEmail("");
    setRole("customer");
    setCurrentUserId(null);
  };

  return (
    <div>
      <h1>User Management</h1>

      {/* User list */}
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email} - Role: {user.role}
              <button onClick={() => editUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {/* User form */}
      <h2>{currentUserId ? "Edit User" : "Add User"}</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="customer">Customer</option>
          </select>
        </label>
      </div>
      {currentUserId ? (
        <>
          <button onClick={handleUpdateUser}>Update User</button>
          <button onClick={clearForm}>Cancel</button>
        </>
      ) : (
        <button onClick={handleCreateUser}>Create User</button>
      )}
    </div>
  );
}

export default UserManagement;
