import { useState, useEffect } from 'react'
import './WelcomeScreen.css'

const WelcomeScreen = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`welcome-screen ${isVisible ? 'visible' : ''}`}>
      <div className="welcome-content">
        <div className="logo-section">
          <h1 className="app-title">BitChat</h1>
          <p className="app-subtitle">Mensajería privada y segura vía Bluetooth</p>
        </div>

        <div className="network-visualization">
          <svg className="network-svg" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--accent-primary)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <g className="network-lines">
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * Math.PI / 180
                const x1 = 200 + Math.cos(angle) * 100
                const y1 = 200 + Math.sin(angle) * 100
                return (
                  <line
                    key={`line-${i}`}
                    x1="200"
                    y1="200"
                    x2={x1}
                    y2={y1}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    className="network-line"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                )
              })}
            </g>

            <circle
              cx="200"
              cy="200"
              r="8"
              fill="var(--accent-primary)"
              filter="url(#glow)"
              className="center-node"
            />

            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * Math.PI / 180
              const x = 200 + Math.cos(angle) * 100
              const y = 200 + Math.sin(angle) * 100
              return (
                <circle
                  key={`node-${i}`}
                  cx={x}
                  cy={y}
                  r="6"
                  fill="var(--accent-primary)"
                  filter="url(#glow)"
                  className="network-node"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              )
            })}
          </svg>
        </div>

        <div className="features-card">
          <div className="features-header">
            <svg className="security-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
                    fill="var(--accent-primary)"
                    fillOpacity="0.2"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                    strokeLinejoin="round"/>
            </svg>
            <h3>Tu privacidad es nuestra prioridad</h3>
          </div>

          <ul className="features-list">
            <li>
              <span className="feature-icon">🔒</span>
              <span>Cifrado de extremo a extremo</span>
            </li>
            <li>
              <span className="feature-icon">🚫</span>
              <span>Sin servidores ni recopilación de datos</span>
            </li>
            <li>
              <span className="feature-icon">📱</span>
              <span>Los mensajes permanecen en tu dispositivo</span>
            </li>
          </ul>
        </div>

        <div className="permissions-preview">
          <h4>Para comenzar, necesitaremos:</h4>
          <div className="permission-chips">
            <div className="permission-chip">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="var(--accent-primary)"
                      strokeWidth="2"
                      fill="none"/>
                <circle cx="12" cy="9" r="2.5" stroke="var(--accent-primary)" strokeWidth="2" fill="none"/>
              </svg>
              <span>Ubicación aproximada</span>
            </div>
            <div className="permission-chip">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"
                      fill="var(--accent-primary)"/>
              </svg>
              <span>Bluetooth</span>
            </div>
            <div className="permission-chip">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                      fill="var(--accent-primary)"/>
              </svg>
              <span>Notificaciones</span>
            </div>
          </div>
        </div>

        <button className="continue-btn" onClick={onNext}>
          <span>Comenzar</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </button>

        <p className="disclaimer">
          Solo te pediremos los permisos esenciales para el funcionamiento
        </p>
      </div>
    </div>
  )
}

export default WelcomeScreen
