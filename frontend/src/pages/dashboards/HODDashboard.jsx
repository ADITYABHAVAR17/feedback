import { NavLink, Outlet } from "react-router-dom";

const HODDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white">
        <h2 className="text-center text-xl font-bold p-4">HOD Dashboard</h2>
        <nav className="flex flex-col">
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              `p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="register-teacher"
            className={({ isActive }) =>
              `p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Register Teacher
          </NavLink>
          <NavLink
            to="assign-subject"
            className={({ isActive }) =>
              `p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Assign Subject
          </NavLink>
          <NavLink
            to="add-students"
            className={({ isActive }) =>
              `p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Add Students
          </NavLink>
          <NavLink
            to="manage-questions"
            className={({ isActive }) =>
              `p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Manage Questions
          </NavLink>
          <NavLink
            to="feedback-analytics"
            className={({ isActive }) =>
              `p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
            }
          >
            Feedback Analytics
          </NavLink>
        </nav>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default HODDashboard;
