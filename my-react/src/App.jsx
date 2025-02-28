
import './App.css';

import Productcard from './Component/Product';

function App() {
  const cards = Array.from({ length: 10 });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Productcard key={index} />
      ))}
    </div>
  );
}

export default App;
