import { useEffect, useState } from "react";
import axios from "../../api/api";

const FeedbackAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    axios.get("/hod/feedback-analytics").then((res) => setAnalytics(res.data));
  }, []);

  return (
    <div>
      <h2>Feedback Summary</h2>
      {analytics.map((item, idx) => (
        <div key={idx}>
          <p><b>Teacher:</b> {item.teacherName}</p>
          <p><b>Subject:</b> {item.subjectName}</p>
          <p><b>Average Ratings:</b></p>
          <ul>
            {Object.entries(item.averageRatings).map(([key, value]) => (
              <li key={key}>{key}: {value.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FeedbackAnalytics;
