import React from 'react';
import { StoreProvider } from './StoreContext';
import CardItem from './CardItem';

function App() {
  return (
    <StoreProvider>
      <div style={{ padding: '20px' }}>
        <h1>My Store</h1>
        <CardItem />
      </div>
    </StoreProvider>
  );
}

export default App;
