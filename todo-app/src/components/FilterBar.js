import React from 'react';

function FilterBar({ filter, setFilter }) {
  return (
    <div className="filters">
      {['All', 'Completed', 'Active'].map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          style={{ fontWeight: filter === status ? 'bold' : 'normal' }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
