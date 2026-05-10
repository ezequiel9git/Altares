# 🕯️ ALTARES: El Juego de las Velas

Un puzzle de lógica en el que debes encender todas las velas del tablero.

<img width="500" height="500" alt="imagen" src="https://github.com/user-attachments/assets/520dd898-8c8c-404f-b983-9b5e474ca468" />

<br><br>

## :thinking: ¿En qué consiste?

LUCES es un puzzle de lógica sobre un tablero de **5×5 velas**. Cada vela puede estar encendida o apagada. Al hacer clic en una vela, **ella y todas sus vecinas** (arriba, abajo, izquierda, derecha) cambian de estado.

El objetivo es conseguir que **todas las velas estén encendidas**. Cada partida genera un tablero aleatorio que siempre tiene solución garantizada.

<br><br>

## 📺 Capturas

| Partida en curso | Victoria |
|:---:|:---:|
|<img width="508" height="524" alt="imagen" src="https://github.com/user-attachments/assets/410d56be-b358-4a6a-bc16-2a3ea873989a" />|<img width="958" height="650" alt="imagen" src="https://github.com/user-attachments/assets/d98dff38-d3c7-4572-b233-979ce3b123be" />|
| Velas encendidas y apagadas mezcladas | Todas las llamas ardiendo |


<br><br>

## 🧰 Tecnologías

- **React 18** — componentes funcionales con hooks
- **Vite 5** — bundler y servidor de desarrollo
- **Tailwind CSS 3** — estilos con tema personalizado
- **SVG animado** — velas con llama y efecto flicker mediante CSS

<br><br>

## 📑 Estructura del proyecto

```
luces-game/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # Punto de entrada
    ├── App.jsx               # Componente raíz y layout
    ├── index.css             # Directivas Tailwind + estilos globales
    ├── hooks/
    │   └── useGame.js        # Lógica completa del juego
    └── components/
        ├── Board.jsx         # Rejilla 5×5
        ├── Cell.jsx          # Casilla individual (botón)
        ├── Candle.jsx        # Vela SVG con animaciones
        └── WinScreen.jsx     # Pantalla de victoria
```

<br><br>

## 💽 Instalación y uso

### Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/luces-game.git
cd luces-game

# 2. Instala las dependencias
npm install

# 3. Arranca el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Otros comandos

```bash
npm run build    # Genera la versión de producción en /dist
npm run preview  # Previsualiza el build de producción localmente
```

<br><br>

## :microscope: Cómo funciona la lógica

### Generación de tableros con solución garantizada

El tablero no se genera de forma puramente aleatoria. El algoritmo parte de un estado ganador (todas las velas encendidas) y aplica entre 5 y 15 clics aleatorios. Como las operaciones son reversibles, cualquier tablero generado así siempre tiene solución.

```js
function generateSolvableGrid() {
  let grid = Array.from({ length: 5 }, () => Array(5).fill(true))
  const numClicks = 5 + Math.floor(Math.random() * 11)
  for (let i = 0; i < numClicks; i++) {
    const r = Math.floor(Math.random() * 5)
    const c = Math.floor(Math.random() * 5)
    grid = applyClick(grid, r, c)
  }
  return grid
}
```

### Propagación del clic

Al pulsar la celda `(row, col)`, se recalculan los vecinos ortogonales dentro de los límites del tablero y se invierte su estado:

```js
function getNeighbors(row, col) {
  const neighbors = [[row, col]]
  if (row > 0)        neighbors.push([row - 1, col])
  if (row < 4)        neighbors.push([row + 1, col])
  if (col > 0)        neighbors.push([row, col - 1])
  if (col < 4)        neighbors.push([row, col + 1])
  return neighbors
}
```

<br><br>

## 🖌️ Características del diseño

- **Tema atmosférico oscuro** con tipografía Cinzel y Crimson Text (Google Fonts)
- **Velas SVG animadas** con efecto de llama mediante `@keyframes flicker`
- **Halo de luz** en cada vela encendida con `box-shadow` animado
- Contador de movimientos y velas encendidas en tiempo real
- Pantalla de victoria con animación pulsante
- Totalmente **responsive** para móvil, tablet y escritorio
- Accesible: etiquetas `aria-label` en cada casilla y `role="alert"` en la victoria

<br><br>

## ©️ Licencia

Creado y desarrollado por Ezequiel Parrado.

<br><br>
