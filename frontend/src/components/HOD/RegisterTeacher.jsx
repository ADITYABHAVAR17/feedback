import React, { useState } from "react";
import axios from "../../api/api";

const RegisterTeacher = () => {
  const User=JSON.parse(localStorage.getItem("user"));
  const Department=User.department;
  const [form, setForm] = useState({ name: "", department: `${Department}`, email: "", password: "" });
  const Role=User.role;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/hod/teachers", form);
      alert("Teacher registered!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Register Teacher</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Department" onChange={(e) => setForm({ ...form, department: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterTeacher;
