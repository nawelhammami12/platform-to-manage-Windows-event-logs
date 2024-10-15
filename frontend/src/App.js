import React, { useState, useEffect, useCallback } from 'react';
import FilterPanel from './components/FilterPanel';
import LogTable from './components/LogTable';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [filters, setFilters] = useState({
    eventType: '',
    eventId: '',
    startDate: '',
    eventLogName: '',
    executableStatus: '',
    ipWhitelisted: ''
  });

  const fetchLogs = useCallback(async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/logs');
      setLogs(response.data);
      setFilteredLogs(response.data);
    } catch (error) {
      console.error('Error fetching logs:', error);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  const applyFilters = useCallback(() => {
    let filtered = logs;

    if (filters.eventType) {
      filtered = filtered.filter(log => log.event_type === parseInt(filters.eventType, 10));
    }

    if (filters.eventId) {
      filtered = filtered.filter(log => log.event_id.toString() === filters.eventId);
    }

    if (filters.startDate) {
      const startDate = new Date(filters.startDate).toISOString().split('T')[0];
      filtered = filtered.filter(log => {
        const logDate = new Date(log.event_time).toISOString().split('T')[0];
        return logDate === startDate;
      });
    }

    if (filters.eventLogName) {
      filtered = filtered.filter(log => log.event_log_name === filters.eventLogName);
    }

    if (filters.executableStatus) {
      filtered = filtered.filter(log => log.executable_status === filters.executableStatus);
    }

    if (filters.ipWhitelisted) {
      filtered = filtered.filter(log => log.ip_whitelisted.toString() === filters.ipWhitelisted);
    }

    setFilteredLogs(filtered);
  }, [logs, filters]);

  useEffect(() => {
    applyFilters();
  }, [filters, applyFilters]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plateforme de traitement des journaux</h1>
      </header>
      <div className="App-body">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterPanel filters={filters} setFilters={setFilters} />
                <LogTable logs={filteredLogs} />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
