import React, { useState } from "react";

const StateApp = () => {
  const [item, setItem] = useState([]);

  const addItem = (itemName) => {
    setItem([...item, { id: Date.now(), name: itemName }]);
  };

  const delItem = (id) => {
    setItem(item.filter((item) => item.id !== id));
  };

  const updateItem = (id, itemName) => {
    setItem(
      item.map((item) => (item.id === id ? { ...item, name: itemName } : item))
    );
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={() => addItem(prompt("Enter Item Name?"))}>
        Add Item
      </button>
      <ul>
        {item.map((val) => (
          <li key={val.id}>
            {val.name}
            <button onClick={() => delItem(val.id)}>Delete</button>
            <button
              onClick={() =>
                updateItem(val.id, prompt("Enter Item Name", val.name))
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateApp;
