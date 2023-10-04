import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      alert('Counter mencapai angka 10!');
    }
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>TM-3</h1>
      <h2>Kelompok 32</h2>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Tambah</button>

      {count === 10 && (
        <div>
          <p>Counter mencapai angka 10! bang</p>
        </div>
      )}
    </div>
  );
}

export default App;
