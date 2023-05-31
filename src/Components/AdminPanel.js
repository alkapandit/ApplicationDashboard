import { NavLink, Route, Routes } from "react-router-dom";
import "./AdminPanel.css";
import Dashboard from "./Dashboard";
function AdminPanel() {
  return (
    <div className="row m-0 admin-panel">
      <div className="col-md-2 nav-container">
        <h4>
          <span>Clean</span>simple
        </h4>
        <div className="nav-wrapper border-bottom">
          <p>Admin Panel</p>
          <ul>
            <li>
              <NavLink to="/dashboard">
                <i class="fa-solid fa-house"></i>Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/listings">
                <i class="fa-sharp fa-solid fa-gem"></i>Listings
              </NavLink>
            </li>
            <li>
              <NavLink to="/order">
                <i class="fa-solid fa-clipboard"></i>
                Orders & Delivery
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats">
                <i class="fa-solid fa-city"></i>Stats
              </NavLink>
            </li>
            <li>
              <NavLink to="/finance">
                <i class="fa-sharp fa-solid fa-building-columns"></i>Finance
              </NavLink>
            </li>
            <li>
              <NavLink to="/marketing">
                <i class="fa-solid fa-volume-high"></i>Marketing
              </NavLink>
            </li>
            <li>
              <NavLink to="/integrations">
                <i class="fa-solid fa-grip"></i>Integrations
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports">
                <i class="fa-solid fa-file-contract"></i>Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings">
                <i class="fa-solid fa-gear"></i>Settings
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-wrapper">
          <p>Admin Panel</p>
          <ul>
            <li>
              <NavLink to="/inbox">
                <i class="fa-solid fa-envelope"></i>Inbox
              </NavLink>
            </li>
            <li>
              <NavLink to="/notifications">
                <i class="fa-solid fa-bell"></i>Notifications
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-10 h-100" style={{ overflowY: "scroll" }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}
export default AdminPanel;
