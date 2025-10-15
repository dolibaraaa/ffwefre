import { useState, useEffect } from 'react'
import './PermissionModal.css'

const LocationPermission = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const handleOption = (option) => {
    setSelected(option)
    setTimeout(() => {
      onNext()
    }, 300)
  }

  return (
    <div className={`permission-modal ${isVisible ? 'visible' : ''}`}>
      <div className="permission-backdrop" onClick={() => handleOption('deny')} />

      <div className="permission-card">
        <div className="permission-icon-wrapper">
          <div className="permission-icon location-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="9"
                r="2.5"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <h2 className="permission-title">Permitir acceso a ubicación</h2>

        <div className="location-options">
          <button
            className={`location-option ${selected === 'precise' ? 'selected' : ''}`}
            onClick={() => handleOption('precise')}
          >
            <div className="location-visual precise">
              <svg viewBox="0 0 120 120" width="120" height="120">
                <defs>
                  <radialGradient id="preciseGradient">
                    <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {[30, 50, 70, 90].map((r, i) => (
                  <circle
                    key={r}
                    cx="60"
                    cy="60"
                    r={r}
                    fill="none"
                    stroke="url(#preciseGradient)"
                    strokeWidth="1"
                    opacity={1 - i * 0.2}
                    className="radar-ring"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}

                <circle cx="60" cy="60" r="6" fill="var(--accent-primary)" className="location-dot" />

                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180
                  const distance = 20 + Math.random() * 50
                  const x = 60 + Math.cos(angle) * distance
                  const y = 60 + Math.sin(angle) * distance
                  const size = 2 + Math.random() * 2
                  return (
                    <circle
                      key={`dot-${i}`}
                      cx={x}
                      cy={y}
                      r={size}
                      fill={i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#4ecdc4' : '#ffd93d'}
                      opacity="0.8"
                      className="nearby-dot"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  )
                })}
              </svg>
            </div>
            <div className="location-option-content">
              <h3>Precisa</h3>
              <p>Encuentra usuarios muy cercanos</p>
            </div>
          </button>

          <button
            className={`location-option ${selected === 'approximate' ? 'selected' : ''}`}
            onClick={() => handleOption('approximate')}
          >
            <div className="location-visual approximate">
              <svg viewBox="0 0 120 120" width="120" height="120">
                <defs>
                  <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {[...Array(5)].map((_, i) => (
                  <g key={`lines-${i}`}>
                    <line
                      x1={20 + i * 20}
                      y1="20"
                      x2={20 + i * 20}
                      y2="100"
                      stroke="url(#gridGradient)"
                      strokeWidth="1"
                      className="grid-line"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    />
                    <line
                      x1="20"
                      y1={20 + i * 20}
                      x2="100"
                      y2={20 + i * 20}
                      stroke="url(#gridGradient)"
                      strokeWidth="1"
                      className="grid-line"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    />
                  </g>
                ))}

                <circle
                  cx="60"
                  cy="60"
                  r="8"
                  fill="var(--accent-primary)"
                  className="location-dot"
                />

                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60) * Math.PI / 180
                  const distance = 35
                  const x = 60 + Math.cos(angle) * distance
                  const y = 60 + Math.sin(angle) * distance
                  return (
                    <circle
                      key={`area-dot-${i}`}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="#ffd93d"
                      opacity="0.7"
                      className="nearby-dot"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  )
                })}
              </svg>
            </div>
            <div className="location-option-content">
              <h3>Aproximada</h3>
              <p>Encuentra usuarios en el área general</p>
            </div>
          </button>
        </div>

        <div className="permission-actions">
          <button
            className="permission-btn primary"
            onClick={() => handleOption(selected || 'approximate')}
          >
            Mientras uso la app
          </button>
          <button
            className="permission-btn secondary"
            onClick={() => handleOption('once')}
          >
            Solo esta vez
          </button>
          <button
            className="permission-btn tertiary"
            onClick={() => handleOption('deny')}
          >
            No permitir
          </button>
        </div>

        <p className="permission-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          Tu ubicación no es rastreada ni almacenada. Solo se usa para encontrar dispositivos Bluetooth cercanos.
        </p>
      </div>
    </div>
  )
}

export default LocationPermission
