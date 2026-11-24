/**
 * El rango entero seguro limita cantidades cuyo producto pueda representarse sin pérdida de
 * precisión. Los errores no producen un total utilizable para que una entrada negativa o
 * fraccionaria no parezca una compra válida.
 */
export function ticketTotal(value, price = 3800) {
  if (value === '') return { quantity: 0, total: 0, error: '' };
  const quantity = Number(value);
  if (!Number.isSafeInteger(quantity) || quantity < 0 || !Number.isSafeInteger(price) || price < 0 || !Number.isSafeInteger(quantity * price)) {
    return { quantity: 0, total: 0, error: 'Ingresa una cantidad entera, no negativa y dentro del rango permitido.' };
  }
  return { quantity, total: quantity * price, error: '' };
}
