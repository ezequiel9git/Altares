// App.jsx — Componente principal del juego LUCES

import { useGame } from './hooks/useGame.js'
import Board from './components/Board.jsx'
import WinScreen from './components/WinScreen.jsx'

export default function App() {
  const { grid, moves, won, litCount, totalCells, handleCellClick, resetGame } = useGame()

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-texture px-4 py-8"
      style={{ background: '#0d0b08' }}
    >
      {/* Fondo con gradiente ambiental */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: won
            ? 'radial-gradient(ellipse at 50% 40%, rgba(255,170,0,0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at 50% 40%, rgba(255,107,43,0.04) 0%, transparent 70%)',
          transition: 'background 1s ease',
        }}
      />

      {/* Cabecera */}
      <header className="text-center mb-6 relative z-10">
        <h1
          className="font-display text-5xl sm:text-6xl font-black tracking-widest"
          style={{
            color: '#ffaa00',
            textShadow: won
              ? '0 0 30px rgba(255,170,0,0.9), 0 0 60px rgba(255,107,43,0.6)'
              : '0 0 20px rgba(255,170,0,0.6), 0 0 40px rgba(255,107,43,0.3)',
            letterSpacing: '0.15em',
          }}
        >
          LUCES
        </h1>
        <p className="font-body italic text-parchment/50 text-lg mt-1">
          enciende todas las velas
        </p>
      </header>

      {/* Instrucciones */}
      {!won && (
        <p className="text-parchment/40 text-sm font-body text-center mb-5 max-w-xs leading-relaxed">
          Haz clic en una vela para cambiar el estado de ella y sus vecinas
        </p>
      )}

      {/* Panel de stats */}
      {!won && (
        <div className="flex gap-8 mb-6 text-center relative z-10">
          <div>
            <p className="text-parchment/40 text-xs font-display tracking-widest uppercase">
              Movimientos
            </p>
            <p className="text-flame text-2xl font-display font-bold">{moves}</p>
          </div>
          <div
            className="w-px"
            style={{ background: 'rgba(255,170,0,0.15)' }}
          />
          <div>
            <p className="text-parchment/40 text-xs font-display tracking-widest uppercase">
              Encendidas
            </p>
            <p className="text-flame text-2xl font-display font-bold">
              {litCount}
              <span className="text-parchment/30 text-base font-normal">
                /{totalCells}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Tablero o pantalla de victoria */}
      <main className="relative z-10">
        {won ? (
          <WinScreen moves={moves} onRestart={resetGame} />
        ) : (
          <Board grid={grid} onCellClick={handleCellClick} disabled={won} />
        )}
      </main>

      {/* Botón nueva partida (durante el juego) */}
      {!won && (
        <button
          onClick={resetGame}
          className={[
            'mt-6 font-display text-xs tracking-widest px-6 py-2 rounded-sm',
            'border border-stone text-parchment/30',
            'hover:border-smoke hover:text-parchment/50',
            'active:scale-95 transition-all duration-200',
            'focus:outline-none focus-visible:ring-1 focus-visible:ring-flame/50',
            'relative z-10',
          ].join(' ')}
        >
          NUEVA PARTIDA
        </button>
      )}

      {/* Línea decorativa de pie */}
      <footer className="mt-8 flex items-center gap-4 relative z-10">
        <div
          className="w-16 h-px"
          style={{ background: 'rgba(255,170,0,0.1)' }}
        />
        <span style={{ color: 'rgba(255,170,0,0.2)', fontSize: '10px' }}>
          ✦ LUCES ✦
        </span>
        <div
          className="w-16 h-px"
          style={{ background: 'rgba(255,170,0,0.1)' }}
        />
      </footer>
    </div>
  )
}
