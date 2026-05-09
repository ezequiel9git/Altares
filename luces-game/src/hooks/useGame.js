// useGame.js — Lógica del juego LUCES

import { useState, useCallback } from 'react'

const SIZE = 5

// Genera un tablero vacío (todas apagadas)
function emptyGrid() {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
}

// Devuelve las coordenadas vecinas (arriba, abajo, izq, der) + la propia celda
function getNeighbors(row, col) {
  const neighbors = [[row, col]]
  if (row > 0)        neighbors.push([row - 1, col])
  if (row < SIZE - 1) neighbors.push([row + 1, col])
  if (col > 0)        neighbors.push([row, col - 1])
  if (col < SIZE - 1) neighbors.push([row, col + 1])
  return neighbors
}

// Aplica un "clic" sobre la celda (row, col) en el grid dado
function applyClick(grid, row, col) {
  const newGrid = grid.map(r => [...r])
  for (const [nr, nc] of getNeighbors(row, col)) {
    newGrid[nr][nc] = !newGrid[nr][nc]
  }
  return newGrid
}

// Comprueba si todas las velas están encendidas
function checkWin(grid) {
  return grid.every(row => row.every(cell => cell === true))
}

// Genera un tablero aleatorio con solución garantizada:
// aplica N clics aleatorios partiendo de todas encendidas, luego baraja.
function generateSolvableGrid() {
  // Empezamos con todo encendido y aplicamos clics aleatorios
  let grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(true))

  // Número de clics aleatorios para generar la disposición (entre 5 y 15)
  const numClicks = 5 + Math.floor(Math.random() * 11)

  for (let i = 0; i < numClicks; i++) {
    const r = Math.floor(Math.random() * SIZE)
    const c = Math.floor(Math.random() * SIZE)
    grid = applyClick(grid, r, c)
  }

  // Nos aseguramos de que no se genere un estado ya ganado
  if (checkWin(grid)) {
    return generateSolvableGrid()
  }

  return grid
}

export function useGame() {
  const [grid, setGrid] = useState(() => generateSolvableGrid())
  const [moves, setMoves] = useState(0)
  const [won, setWon] = useState(false)

  const handleCellClick = useCallback((row, col) => {
    if (won) return

    setGrid(prev => {
      const newGrid = applyClick(prev, row, col)
      if (checkWin(newGrid)) {
        setWon(true)
      }
      return newGrid
    })

    setMoves(prev => prev + 1)
  }, [won])

  const resetGame = useCallback(() => {
    setGrid(generateSolvableGrid())
    setMoves(0)
    setWon(false)
  }, [])

  const litCount = grid.flat().filter(Boolean).length

  return {
    grid,
    moves,
    won,
    litCount,
    totalCells: SIZE * SIZE,
    handleCellClick,
    resetGame,
  }
}
