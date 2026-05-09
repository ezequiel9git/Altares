// Board.jsx — Tablero 5×5

import Cell from './Cell.jsx'

export default function Board({ grid, onCellClick, disabled }) {
  return (
    <div
      className="inline-grid gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl border border-smoke/40"
      style={{
        gridTemplateColumns: 'repeat(5, auto)',
        background: 'rgba(20,15,8,0.7)',
        boxShadow: '0 0 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,0,0,0.4)',
      }}
    >
      {grid.map((row, r) =>
        row.map((lit, c) => (
          <Cell
            key={`${r}-${c}`}
            lit={lit}
            row={r}
            col={c}
            onClick={onCellClick}
            disabled={disabled}
          />
        ))
      )}
    </div>
  )
}
