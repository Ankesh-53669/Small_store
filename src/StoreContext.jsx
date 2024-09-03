import React, { createContext, useState } from 'react';

// Create a Context
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Define the state you want to share
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
  ]);

  // Function to add a new item
  const addItem = (name, price) => {
    const newItem = {
      id: items.length + 1,
      name,
      price,
    };
    setItems([...items, newItem]);
  };

  // The context value that will be supplied to any descendants of this component.
  const value = { items, setItems, addItem };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

