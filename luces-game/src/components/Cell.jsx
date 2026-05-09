// Cell.jsx — Casilla del tablero

import Candle from './Candle.jsx'

export default function Cell({ lit, onClick, row, col, disabled }) {
  return (
    <button
      onClick={() => !disabled && onClick(row, col)}
      disabled={disabled}
      aria-label={`Vela ${row + 1}-${col + 1}, ${lit ? 'encendida' : 'apagada'}`}
      className={[
        'relative flex items-center justify-center',
        'w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28',
        'rounded-md border transition-all duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-flame',
        lit
          ? [
              'border-amber-600/40 bg-stone/60',
              'animate-glow',
              'hover:scale-105 hover:border-amber-500/60',
              'active:scale-95',
            ].join(' ')
          : [
              'border-stone bg-ash/80',
              'animate-glowOff',
              'hover:scale-105 hover:border-smoke',
              'active:scale-95',
            ].join(' '),
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
      ].join(' ')}
    >
      {/* Fondo de luz ambiental cuando está encendida */}
      {lit && (
        <div
          className="absolute inset-0 rounded-md pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(255,170,0,0.12) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Vela SVG */}
      <div className="w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-18 relative z-10">
        <Candle lit={lit} />
      </div>
    </button>
  )
}
