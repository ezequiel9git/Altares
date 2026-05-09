// Candle.jsx — SVG vela animada con estados encendida / apagada

export default function Candle({ lit }) {
  return (
    <svg
      viewBox="0 0 60 90"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`glow-${lit ? 'lit' : 'unlit'}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={lit ? '#ffcc44' : '#4a3f2e'} stopOpacity="1" />
          <stop offset="100%" stopColor={lit ? '#ff6600' : '#2a2018'} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wax-grad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f0e8d0" />
          <stop offset="100%" stopColor="#c8b890" />
        </radialGradient>
        <filter id="flame-blur">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Halo de luz cuando está encendida */}
      {lit && (
        <ellipse
          cx="30"
          cy="28"
          rx="22"
          ry="22"
          fill="url(#glow-lit)"
          opacity="0.5"
          className="animate-glow"
        />
      )}

      {/* Cuerpo de la vela */}
      <rect
        x="20"
        y="45"
        width="20"
        height="38"
        rx="3"
        fill={lit ? 'url(#wax-grad)' : '#3a3228'}
        stroke={lit ? '#c8a060' : '#2a2018'}
        strokeWidth="0.5"
      />

      {/* Cera derretida / goteo */}
      {lit && (
        <>
          <path d="M20 52 Q17 56 18 62 L20 62 Z" fill="#e8dcc0" opacity="0.7" />
          <path d="M40 58 Q43 62 41 68 L40 68 Z" fill="#e8dcc0" opacity="0.5" />
        </>
      )}

      {/* Parte superior de la vela (plana o con cera fundida) */}
      <ellipse
        cx="30"
        cy="45"
        rx="10"
        ry="3"
        fill={lit ? '#ddd0a0' : '#2e2820'}
        stroke={lit ? '#b89860' : '#1e1810'}
        strokeWidth="0.5"
      />

      {/* Mecha */}
      <line
        x1="30"
        y1="45"
        x2="30"
        y2="38"
        stroke={lit ? '#2a1800' : '#1a1208'}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Llama principal */}
      {lit && (
        <g className="animate-flicker" style={{ transformOrigin: '30px 38px' }}>
          <ellipse
            cx="30"
            cy="30"
            rx="5"
            ry="9"
            fill="#ffdd44"
            opacity="0.95"
            filter="url(#flame-blur)"
          />
          <ellipse
            cx="30"
            cy="32"
            rx="3.5"
            ry="6"
            fill="#ff8800"
            opacity="0.85"
          />
          <ellipse
            cx="30"
            cy="34"
            rx="2"
            ry="3.5"
            fill="#ff4400"
            opacity="0.7"
          />
          {/* Punto brillante central */}
          <ellipse
            cx="30"
            cy="30"
            rx="1.5"
            ry="2.5"
            fill="#ffffff"
            opacity="0.6"
          />
        </g>
      )}

      {/* Llama secundaria (desfasada para efecto realista) */}
      {lit && (
        <g className="animate-flicker2" style={{ transformOrigin: '30px 38px' }}>
          <ellipse
            cx="30"
            cy="29"
            rx="3"
            ry="7"
            fill="#ffaa22"
            opacity="0.4"
          />
        </g>
      )}

      {/* Humo cuando está apagada */}
      {!lit && (
        <g opacity="0.4">
          <path
            d="M30 37 Q28 30 30 23"
            stroke="#888"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* Punto de mecha apagada */}
      {!lit && (
        <circle cx="30" cy="37" r="1.2" fill="#555" />
      )}
    </svg>
  )
}
