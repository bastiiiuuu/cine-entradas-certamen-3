import { useState } from 'react';
import Encabezado from './Encabezado';
import TarjetaPelicula from './TarjetaPelicula';
import './index.css';

export default function App() {
  const [entradas, setEntradas] = useState('0');

  return (
    <div className="app-container">
      <Encabezado />
      
      <div className="input-container">
        <label htmlFor="entradas">N° de entradas:</label>
        <input
          id="entradas" type="number" step="1"
          min="0"
          value={entradas}
          onChange={(e) => setEntradas(e.target.value)}
        />
      </div>

      <TarjetaPelicula cantidad={entradas} />
    </div>
  );
}