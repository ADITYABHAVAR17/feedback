import { useEffect, useState } from "react";
import axios from "../../api/api";

const DashboardOverview = () => {
  const [stats, setStats] = useState({ teachers: 0, subjects: 0, feedbacks: 0, students: 0 });

  useEffect(() => {
    axios.get("/hod/dashboard").then((res) => setStats(res.data));
  }, []);

  return (
    <div>
      <h2>Dashboard Overview</h2>
      <p>Total Teachers: {stats.teachers}</p>
      <p>Total Subjects: {stats.subjects}</p>
      <p>Total Feedbacks: {stats.feedbacks}</p>
      <p>Total Students: {stats.students}</p>
    </div>
  );
};

export default DashboardOverview;
