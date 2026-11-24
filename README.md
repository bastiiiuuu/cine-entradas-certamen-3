# Calculadora de entradas de cine

Una demostración académica en React del uso de estado, props y validación para calcular el importe de entradas en pesos chilenos.

[Código](https://github.com/bastiiiuuu/cine-entradas-certamen-3) · [Demostración](https://bastiiiuuu.github.io/cine-entradas-certamen-3/)

## Qué se puede revisar

Validar cantidades enteras no negativas y calcular un total sin desbordar el rango entero seguro. La interfaz separa componentes visuales de las funciones que concentran las reglas o la persistencia. Las pruebas cubren casos de fallo concretos.

## Tecnologías

JavaScript, React, Vite, CSS, ESLint, node:test y GitHub Actions. Los componentes están escritos en JSX, no en TypeScript.

## Instalación

Requiere Node.js 24 LTS y npm.

```sh
git clone https://github.com/bastiiiuuu/cine-entradas-certamen-3.git
cd cine-entradas-certamen-3
npm ci
npm run dev
```

Abre la dirección que indica Vite. Para generar la versión estática:

```sh
npm test
npm run lint
npm run build
npm run preview
```

## Recorrido de demostración

Ingresar 3 entradas y comprobar $11.400. Probar -2 y 1,5: deben mostrar un error, sin anunciar un total válido.

## Cómo está organizado

- `src/App.jsx` conecta los estados y componentes de la pantalla.
- `src/ticketMath.js` concentra la parte que necesita verificación independiente.
- `tests/` contiene pruebas ejecutables con Node.js, sin un servicio externo.
- `.github/workflows/pages.yml` verifica pruebas, lint y build antes de publicar `dist/`.

## Alcance y límites

El precio de ejemplo es $3.800 por entrada. No realiza reservas, ventas, autenticación ni pagos. El afiche es material de referencia del ejercicio y no implica afiliación con la película.

Los datos ingresados se consideran no confiables. El contenido del usuario se presenta mediante el escape de React, sin interpretar cadenas como HTML.

## Publicación

GitHub Pages utiliza el workflow incluido y debe estar configurado con origen GitHub Actions. `base: './'` permite servir los recursos bajo el nombre del repositorio. La compilación local no demuestra por sí sola que una publicación remota haya finalizado.

## Contexto

Proyecto académico incluido en un portafolio de formación. Las mejoras de documentación, pruebas y correcciones se prepararon con asistencia de IA. No se presenta como experiencia laboral ni como producto comercial.
