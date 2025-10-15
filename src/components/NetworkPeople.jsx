import './NetworkPeople.css'

const NetworkPeople = ({ onClose }) => {
  const peers = [
    { id: 1, username: '@anon9681', avatar: '👨‍🦳', lastSeen: '~15 m', status: 'online' },
    { id: 2, username: '@anon9681', avatar: '👩‍🦰', lastSeen: '~15 m', status: 'online' },
    { id: 3, username: '@anon9681', avatar: '👱‍♀️', lastSeen: '~15 m', status: 'online' },
    { id: 4, username: '@anon9681', avatar: '👨', lastSeen: '~12 m', status: 'online' }
  ]

  return (
    <div className="network-people">
      <div className="network-overlay" onClick={onClose}></div>

      <div className="network-panel">
        <div className="network-header">
          <h2 className="network-title">NETWORK</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="network-content">
          <div className="section-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                    fill="var(--accent-primary)"/>
            </svg>
            <h3 className="section-title">PEOPLE</h3>
          </div>

          <div className="peers-list">
            {peers.map((peer) => (
              <div key={peer.id} className="peer-item">
                <div className="peer-avatar">
                  {peer.avatar}
                </div>
                <div className="peer-info">
                  <div className="peer-username">{peer.username}</div>
                  <div className="peer-meta">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="2" fill="var(--accent-primary)"/>
                    </svg>
                    <span className="peer-status">{peer.lastSeen}</span>
                  </div>
                </div>
                <button className="peer-action">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8v8M8 12h8" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="connection-status">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="var(--accent-primary)" strokeWidth="2"/>
              <circle cx="12" cy="12" r="6" fill="var(--accent-primary)"/>
            </svg>
            <span>Currently connected to {peers.length} peers.</span>
          </div>
        </div>

        <div className="network-footer">
          <button className="network-settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="var(--text-secondary)" strokeWidth="2"/>
              <path d="M12 1v6m0 6v10M23 12h-6m-4 0H1" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Configuración de red</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NetworkPeople
