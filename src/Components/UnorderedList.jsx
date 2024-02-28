import React, { useState } from 'react';

function UnorderedList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = ['invest', 'kiosk', 'expo', 'qnd'];

  const handleItemHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <ul className="unordered-list">
      {items.map((item, index) => (
        <li
          key={index}
          className={`list-item ${hoveredIndex === index ? '' : 'dimmed'}`}
          onMouseEnter={() => handleItemHover(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default UnorderedList;
