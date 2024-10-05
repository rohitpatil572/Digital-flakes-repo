import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your CSS file for the sidebar

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>digitalflake</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/state">State</Link>
        </li>
        <li>
          <Link to="/city">City</Link>
        </li>
        <li>
          <Link to="/warehouse">Warehouse</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
