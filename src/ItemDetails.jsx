import React from 'react';

const ItemDetails = ({ item }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h4>Details of {item.name}</h4>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemDetails;
