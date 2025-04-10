import { useState } from "react";
import axios from "../../api/api";

const AssignSubject = () => {
  const [formData, setFormData] = useState({
    name: "",
    teacherId: "",
    year: "",
    semester: "",
    branch: "",
    class: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/hod/assign-subject", formData);
    alert("Subject Assigned");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputs for each field */}
      {["name", "teacherId", "year", "semester", "branch", "class"].map((field) => (
        <input key={field} name={field} onChange={handleChange} placeholder={field} required />
      ))}
      <button type="submit">Assign</button>
    </form>
  );
};

export default AssignSubject;
