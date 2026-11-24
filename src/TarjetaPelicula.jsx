/**
 * El valor del input llega como texto. La función de cálculo decide si representa una cantidad
 * válida antes de mostrar un importe, y la presentación utiliza el formato monetario de Chile.
 */
import imagenPelicula from './assets/pelicula.jpg';
import { ticketTotal } from './ticketMath';
const money = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });

export default function TarjetaPelicula({ cantidad }) {
  const precio = 3800;
  const { quantity, total, error } = ticketTotal(cantidad, precio);
  return (
    <div className="tarjeta">
      <img src={imagenPelicula} alt="Afiche de Scary Movie" className="poster" />
      <div className="info"><h2>Scary Movie</h2><p>Precio por entrada: {money.format(precio)}</p>
        {error ? <p role="alert">{error}</p> : <div aria-live="polite"><p>Entradas: {quantity}</p><h3>Total a pagar: {money.format(total)}</h3></div>}
        <p>Demostración académica. No realiza reservas ni pagos.</p>
      </div>
    </div>
  );
}
