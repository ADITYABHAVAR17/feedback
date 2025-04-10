import { useState } from "react";
import axios from "../../api/api";

const AddStudentsBulk = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("/hod/add-students-bulk", formData);
    alert("Students Uploaded");
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
};

export default AddStudentsBulk;
