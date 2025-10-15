import { useState, useEffect } from 'react'
import './PermissionModal.css'

const NotificationPermission = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const handleAllow = () => {
    setTimeout(() => {
      onNext()
    }, 300)
  }

  const handleDeny = () => {
    setTimeout(() => {
      onNext()
    }, 300)
  }

  return (
    <div className={`permission-modal ${isVisible ? 'visible' : ''}`}>
      <div className="permission-backdrop" onClick={handleDeny} />

      <div className="permission-card">
        <div className="permission-icon-wrapper">
          <div className="permission-icon notification-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                fill="var(--accent-primary)"
              />
            </svg>
          </div>
        </div>

        <h2 className="permission-title">
          Mantente al tanto de tus mensajes
        </h2>

        <p className="permission-description">
          Recibe alertas instantáneas cuando lleguen nuevos mensajes, incluso si la app está en segundo plano.
        </p>

        <div className="notification-illustration">
          <svg viewBox="0 0 200 140" width="200" height="140">
            <defs>
              <linearGradient id="bellGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            <g className="notification-waves">
              <line
                x1="50"
                y1="40"
                x2="20"
                y2="20"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.4"
                style={{ animationDelay: '0s' }}
              />
              <line
                x1="50"
                y1="50"
                x2="15"
                y2="40"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.3"
                style={{ animationDelay: '0.3s' }}
              />
              <line
                x1="150"
                y1="40"
                x2="180"
                y2="20"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.4"
                style={{ animationDelay: '0.15s' }}
              />
              <line
                x1="150"
                y1="50"
                x2="185"
                y2="40"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.3"
                style={{ animationDelay: '0.45s' }}
              />
            </g>

            <g className="notification-bell" transform="translate(100, 50)">
              <path
                d="M-15 5 Q-15 -15, 0 -20 Q15 -15, 15 5 L15 10 L-15 10 Z"
                fill="url(#bellGradient)"
                stroke="var(--accent-primary)"
                strokeWidth="2"
              />
              <circle cx="0" cy="15" r="4" fill="var(--accent-primary)" />
              <rect x="-2" y="-25" width="4" height="5" rx="2" fill="var(--accent-primary)" />
            </g>

            <g transform="translate(100, 95)">
              <rect
                x="-60"
                y="0"
                width="120"
                height="40"
                rx="8"
                fill="var(--bg-card)"
                stroke="var(--accent-primary)"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <circle cx="-40" cy="20" r="8" fill="var(--accent-primary)" opacity="0.6" />
              <rect x="-25" y="12" width="60" height="4" rx="2" fill="var(--text-secondary)" opacity="0.4" />
              <rect x="-25" y="22" width="40" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.3" />
            </g>
          </svg>
        </div>

        <div className="notification-benefits">
          <div className="benefit-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
                fill="var(--accent-primary)"
              />
            </svg>
            <span>No te pierdas ningún mensaje importante</span>
          </div>

          <div className="benefit-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="2" fill="none" />
              <path d="M12 6v6l4 2" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Responde rápidamente a tus contactos</span>
          </div>

          <div className="benefit-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span>Notificaciones privadas y seguras</span>
          </div>
        </div>

        <div className="permission-actions">
          <button className="permission-btn primary" onClick={handleAllow}>
            Permitir notificaciones
          </button>
          <button className="permission-btn tertiary" onClick={handleDeny}>
            Omitir
          </button>
        </div>

        <p className="permission-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Puedes personalizar las notificaciones en ajustes en cualquier momento
        </p>
      </div>
    </div>
  )
}

export default NotificationPermission
