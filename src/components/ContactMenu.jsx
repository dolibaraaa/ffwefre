import { useState } from 'react'
import './ContactMenu.css'

const ContactMenu = ({ contact, position, onClose, onAction }) => {
  const [showUnblock, setShowUnblock] = useState(false)

  const handleAction = (action) => {
    onAction(action, contact)
    if (action === 'block') {
      setShowUnblock(true)
    } else {
      onClose()
    }
  }

  return (
    <div className="contact-menu-overlay" onClick={onClose}>
      <div
        className="contact-menu"
        style={{ top: position.y, left: position.x }}
        onClick={(e) => e.stopPropagation()}
      >
        {showUnblock ? (
          <>
            <div className="menu-header blocked">
              <span className="contact-label">Contacto Bloqueado</span>
              <div className="contact-id">{contact.id}</div>
            </div>
            <button
              className="menu-option unblock"
              onClick={() => handleAction('unblock')}
            >
              Desbloquear
            </button>
          </>
        ) : (
          <>
            <div className="menu-header">
              {contact.isBlocked ? (
                <>
                  <span className="contact-label">Contacto Bloqueado</span>
                  <div className="contact-id">{contact.id}</div>
                </>
              ) : (
                <>
                  <span className="contact-label">Contacto</span>
                  <div className="contact-id">{contact.id}</div>
                </>
              )}
            </div>

            {contact.isBlocked ? (
              <button
                className="menu-option unblock"
                onClick={() => handleAction('unblock')}
              >
                Desbloquear
              </button>
            ) : (
              <>
                {!contact.isFavorite && (
                  <button
                    className="menu-option"
                    onClick={() => handleAction('add')}
                  >
                    Agregar
                  </button>
                )}
                <button
                  className="menu-option"
                  onClick={() => handleAction('favorite')}
                >
                  {contact.isFavorite ? 'Quitar de Favoritos' : 'Favorito'}
                </button>
                <button
                  className="menu-option block"
                  onClick={() => handleAction('block')}
                >
                  Bloquear
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ContactMenu
