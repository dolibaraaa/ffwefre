import { useState, useEffect } from 'react'
import './PermissionModal.css'

const BluetoothPermission = ({ onNext }) => {
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
          <div className="permission-icon bluetooth-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"
                fill="var(--accent-primary)"
              />
            </svg>
          </div>
        </div>

        <h2 className="permission-title">
          Permitir conexión Bluetooth
        </h2>

        <p className="permission-description">
          BitChat necesita conectarse con dispositivos cercanos para enviar y recibir mensajes de forma segura.
        </p>

        <div className="bluetooth-info-card">
          <div className="info-item">
            <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="3" fill="var(--accent-primary)" />
              <circle cx="12" cy="12" r="6" stroke="var(--accent-primary)" strokeWidth="1" opacity="0.4" />
            </svg>
            <div>
              <h4>Descubre usuarios cercanos</h4>
              <p>Encuentra personas a tu alrededor para chatear</p>
            </div>
          </div>

          <div className="info-item">
            <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                fill="none"
              />
              <path d="M9 12l2 2 4-4" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <h4>Crea conexiones de red mesh</h4>
              <p>Mensajería sin internet ni servidores</p>
            </div>
          </div>

          <div className="info-item">
            <svg className="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="var(--accent-primary)" strokeWidth="2" fill="none" />
              <path d="M7 11V7a5 5 0 0110 0v4" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <h4>Funciona sin internet</h4>
              <p>Comunicación directa entre dispositivos</p>
            </div>
          </div>
        </div>

        <div className="permission-actions">
          <button className="permission-btn primary" onClick={handleAllow}>
            Permitir
          </button>
          <button className="permission-btn tertiary" onClick={handleDeny}>
            No permitir
          </button>
        </div>

        <p className="permission-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          Solo se conectará cuando tú lo autorices. Puedes desactivarlo en cualquier momento.
        </p>
      </div>
    </div>
  )
}

export default BluetoothPermission
