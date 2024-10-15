import React from 'react';
import '../styles/LogTable.css';

const LogTable = ({ logs }) => {
  return (
    <table className="log-table">
      <thead>
        <tr>
          <th>Nom du journal d’événements</th>
          <th>ID d’événement</th>
          <th>Date de l’événement</th>
          <th>Description</th>
          <th>Nom de l’hôte</th>
          <th>Adresse IP</th>
          <th>IP Whitelisted</th>
          <th>État de l’exécutable</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td>{log.event_log_name}</td>
            <td>{log.event_id}</td>
            <td>{log.event_time}</td>
            <td className="description-cell">{log.event_data ? log.event_data.join(', ') : ''}</td>
            <td>{log.computer_name}</td>
            <td>{log.ip_address}</td>
            <td>{log.ip_whitelisted ? 'White Listed' : 'Not in the List'}</td>
            <td>{log.executable_status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;

