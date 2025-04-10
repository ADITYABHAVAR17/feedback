import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HODDashboard from "../pages/dashboards/HODDashboard";
import TeacherDashboard from "../pages/dashboards/TeacherDashboard";
import StudentDashboard from "../pages/dashboards/StudentDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardOverview from "../components/HOD/DashboardOverview";
import RegisterTeacher from "../components/HOD/RegisterTeacher";
import AssignSubject from "../components/HOD/AssignSubject";
import AddStudentsBulk from "../components/HOD/AddStudentsBulk";
import ManageQuestions from "../components/HOD/ManageQuestions";
import FeedbackAnalytics from "../components/HOD/FeedbackAnalytics";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/login" element={<Login />} />

      {/* HOD Routes */}
      <Route
        path="/hod"
        element={
          <ProtectedRoute role="HOD">
            <HODDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DashboardOverview />} />
        <Route path="register-teacher" element={<RegisterTeacher />} />
        <Route path="assign-subject" element={<AssignSubject />} />
        <Route path="add-students" element={<AddStudentsBulk />} />
        <Route path="manage-questions" element={<ManageQuestions />} />
        <Route path="feedback-analytics" element={<FeedbackAnalytics />} />
      </Route>

      {/* Teacher Routes */}
      <Route
        path="/teacher"
        element={
          <ProtectedRoute role="teacher">
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />

      {/* Student Routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
