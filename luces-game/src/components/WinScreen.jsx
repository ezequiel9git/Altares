// WinScreen.jsx — Pantalla de victoria

export default function WinScreen({ moves, onRestart }) {
  return (
    <div
      className="animate-fadeIn text-center py-8 px-6"
      role="alert"
      aria-live="assertive"
    >
      {/* Velas decorativas */}
      <div className="flex justify-center gap-2 mb-6 text-4xl">
        {'🕯️'.repeat(5)}
      </div>

      <h2
        className="font-display text-4xl sm:text-5xl font-bold text-flame mb-2 animate-winPulse"
        style={{ letterSpacing: '0.08em' }}
      >
        ¡VICTORIA!
      </h2>

      <p className="font-body text-parchment/80 text-xl mt-4 mb-2">
        Has encendido todas las llamas
      </p>

      <p className="font-body text-parchment/50 text-lg mb-8">
        en{' '}
        <span className="text-flame font-semibold">{moves}</span>{' '}
        {moves === 1 ? 'movimiento' : 'movimientos'}
      </p>

      {/* Línea decorativa */}
      <div className="flex items-center gap-4 mb-8 px-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-600/40" />
        <span className="text-amber-600/60 text-lg">✦</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-600/40" />
      </div>

      <button
        onClick={onRestart}
        className={[
          'font-display text-sm tracking-widest px-8 py-3 rounded-sm',
          'border border-amber-600/50 text-amber-400',
          'hover:bg-amber-600/10 hover:border-amber-500',
          'active:scale-95 transition-all duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-flame',
        ].join(' ')}
      >
        NUEVA PARTIDA
      </button>
    </div>
  )
}
