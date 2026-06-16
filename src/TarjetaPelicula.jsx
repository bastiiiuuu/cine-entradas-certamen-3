import imagenPelicula from './assets/pelicula.jpg';

export default function TarjetaPelicula({ cantidad }) {
  const precio = 3800;
  const total = precio * cantidad;

  return (
    <div className="tarjeta">
      <img
        src={imagenPelicula}
        alt="Scary Movie"
        className="poster"
      />
      <div className="info">
        <h2>Scary Movie</h2>
        <p>Precio por entrada: ${precio}</p>
        <p>Entradas: {cantidad}</p>
        <h3>Total a pagar: ${total}</h3>
      </div>
    </div>
  );
}