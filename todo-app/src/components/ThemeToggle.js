import React from 'react';

function ThemeToggle({ dark, toggleDark }) {
  return (
    <button onClick={toggleDark} className="dark-mode">
      {dark ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
