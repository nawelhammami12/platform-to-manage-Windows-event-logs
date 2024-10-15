import React from 'react';

const options = [
  { value: '', label: 'Sélectionnez un nom de journal d’événements' },
  { value: 'Application', label: 'Application' },
  { value: 'Système', label: 'Système' },
  { value: 'Sécurité', label: 'Sécurité' },
  { value: 'Installation', label: 'Installation' },
  { value: 'Événements transférés', label: 'Événements transférés' },
];

const DropdownFilter = ({ selectedValue, onChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownFilter;
