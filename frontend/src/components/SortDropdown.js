import React from 'react';
import '../styles/SortDropdown.css';

const SortDropdown = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="event_time">Event Time</option>
        <option value="event_id">Event ID</option>
        <option value="event_type">Event Type</option>
        <option value="computer_name">Host Name</option>
        <option value="ip_address">IP Address</option>
        <option value="executable_status">Executable Status</option>
      </select>
    </div>
  );
};

export default SortDropdown;
