import { useState } from 'react';
import Encabezado from './Encabezado';
import TarjetaPelicula from './TarjetaPelicula';
import './index.css';

export default function App() {
  const [entradas, setEntradas] = useState(0);

  return (
    <div className="app-container">
      <Encabezado />
      
      <div className="input-container">
        <label>N° de entradas:</label>
        <input
          type="number"
          min="0"
          value={entradas}
          onChange={(e) => setEntradas(e.target.value)}
        />
      </div>

      <TarjetaPelicula cantidad={entradas} />
    </div>
  );
}