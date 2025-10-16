import { useState } from 'react'
import './OnlineUsers.css'
import ContactMenu from './ContactMenu'

const OnlineUsers = ({ onClose }) => {
  const [users] = useState([
    { id: 'Anon64', online: true, isFavorite: false, isBlocked: false },
    { id: 'Usuario 1', online: true, isFavorite: false, isBlocked: false },
    { id: 'Usuario 5', online: true, isFavorite: false, isBlocked: false }
  ])
  const [selectedUser, setSelectedUser] = useState(null)
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })

  const handleUserClick = (user, event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setMenuPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    })
    setSelectedUser(user)
  }

  const handleAction = (action, user) => {
    console.log(`Action ${action} on user`, user)
    setSelectedUser(null)
  }

  return (
    <div className="online-users-overlay" onClick={onClose}>
      <div className="online-users-container" onClick={(e) => e.stopPropagation()}>
        <div className="online-users-bubble">
          <div className="users-list">
            {users.map((user, index) => (
              <div key={index} className="user-item">
                <span className="user-bullet">•</span>
                <button
                  className="user-name-btn"
                  onClick={(e) => handleUserClick(user, e)}
                >
                  {user.id}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="online-label-bubble">
          Usuarios Online (w)
        </div>

        <div className="action-buttons">
          <button className="action-btn">Favorito</button>
          <button className="action-btn">Bloquear</button>
        </div>
      </div>

      {selectedUser && (
        <ContactMenu
          contact={selectedUser}
          position={menuPosition}
          onClose={() => setSelectedUser(null)}
          onAction={handleAction}
        />
      )}
    </div>
  )
}

export default OnlineUsers
