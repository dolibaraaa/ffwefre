import { useState, useEffect } from 'react'
import './BluetoothSetup.css'

const BluetoothSetup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const handleEnable = () => {
    setIsEnabled(true)
  }

  return (
    <div className={`bluetooth-setup ${isVisible ? 'visible' : ''}`}>
      <div className="setup-content">
        <div className="setup-header">
          <h1 className="setup-title">BitChat</h1>
          <p className="setup-subtitle">Mensajería privada y segura vía Bluetooth</p>
        </div>

        <div className="network-visualization-large">
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

            {!isEnabled ? (
              <>
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
                        className="network-line disabled"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    )
                  })}
                </g>

                <circle
                  cx="200"
                  cy="200"
                  r="8"
                  fill="var(--text-muted)"
                  className="center-node disabled"
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
                      fill="var(--text-muted)"
                      className="network-node disabled"
                    />
                  )
                })}
              </>
            ) : (
              <>
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
              </>
            )}
          </svg>
        </div>

        <div className={`bluetooth-status-card ${isEnabled ? 'enabled' : ''}`}>
          <div className="bluetooth-icon-large">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"
                fill={isEnabled ? 'var(--accent-primary)' : 'var(--text-muted)'}
              />
            </svg>
          </div>

          <div className="status-content">
            {!isEnabled ? (
              <>
                <h2>Bluetooth es necesario</h2>
                <p>BitChat utiliza Bluetooth para:</p>
              </>
            ) : (
              <>
                <h2>Bluetooth activado</h2>
                <p>Listo para comenzar a chatear</p>
              </>
            )}
          </div>

          {!isEnabled && (
            <ul className="bluetooth-features">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="3" fill="var(--accent-primary)" />
                </svg>
                <span>Descubrir usuarios cercanos</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path d="M9 12l2 2 4-4" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Crear conexiones de red mesh</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="var(--accent-primary)" strokeWidth="2" fill="none" />
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Funcionar sin internet ni servidores</span>
              </li>
            </ul>
          )}
        </div>

        {!isEnabled ? (
          <button className="enable-btn" onClick={handleEnable}>
            <span>Activar Bluetooth</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"
                fill="currentColor"
              />
            </svg>
          </button>
        ) : (
          <div className="success-message">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="var(--accent-primary)" fillOpacity="0.2" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="var(--accent-primary)"
              />
            </svg>
            <p>Todo listo para comenzar</p>
          </div>
        )}

        <p className="setup-note">
          Este proceso solo toma unos segundos
        </p>
      </div>
    </div>
  )
}

export default BluetoothSetup
