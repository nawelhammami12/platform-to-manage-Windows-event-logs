import React from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
      <div className="filter-panel">
        <label>
          Type d'événement:
          <select
              name="eventType"
              value={filters.eventType}
              onChange={handleChange}
          >
            <option value="">Tous</option>
            <option value="1">Information</option>
            <option value="2">Avertissement</option>
            <option value="3">Erreur</option>
          </select>
        </label>

        <label>
          ID d'événement:
          <input
              type="text"
              name="eventId"
              value={filters.eventId}
              onChange={handleChange}
          />
        </label>

        <label>
          Date de début:
          <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
          />
        </label>

        <label>
          Nom du journal:
          <select
              name="eventLogName"
              value={filters.eventLogName}
              onChange={handleChange}
          >
            <option value="">Tous</option>
            <option value="Application">Application</option>
            <option value="Sécurité">Sécurité</option>
            <option value="Installation">Installation</option>
            <option value="Système">Système</option>
            <option value="Événements transférés">Événements transférés</option>
          </select>
        </label>

        <label>
          État de l'exécutable:
          <select
              name="executableStatus"
              value={filters.executableStatus}
              onChange={handleChange}
          >
            <option value="">Tous</option>
            <option value="Malicious">Malveillant</option>
            <option value="Not Malicious">Non malveillant</option>
          </select>
        </label>

        <label>
          IP Whitelisted:
          <select
              name="ipWhitelisted"
              value={filters.ipWhitelisted}
              onChange={handleChange}
          >
            <option value="">Tous</option>
            <option value="true">Whitelisted</option>
            <option value="false">Not Whitelisted</option>
          </select>
        </label>

      </div>
  );
};

export default FilterPanel;
