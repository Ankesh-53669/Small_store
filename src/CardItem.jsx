import React, { useContext, useState } from 'react';
import { StoreContext } from './StoreContext';
import ItemDetails from './ItemDetails';

const CardItem = () => {
  const { items } = useContext(StoreContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              width: '30%',
              border: '1px solid black',
              margin: '10px',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={() => handleItemClick(item)}
          >
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div style={{ marginTop: '20px' }}>
          <ItemDetails item={selectedItem} />
        </div>
      )}
    </div>
  );
};

export default CardItem;

