import { useState, useEffect } from 'react'
import './ChatScreen.css'
import CommandSuggestion from './CommandSuggestion'
import OnlineUsers from './OnlineUsers'

const ChatScreen = ({ onOpenCommands, onOpenChannels, onOpenNetwork }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'get people around you to download bitchat and chat with them here!',
      time: '11:50:39',
      isSystem: true
    }
  ])
  const [showCommandSuggestion, setShowCommandSuggestion] = useState(false)
  const [currentCommand, setCurrentCommand] = useState(null)
  const [showOnlineUsers, setShowOnlineUsers] = useState(false)
  const [screenCleared, setScreenCleared] = useState(false)

  const commands = {
    '/clear': { description: 'Limpiar mensajes', action: 'clear' },
    '/w': { description: 'Ver usuarios online', action: 'online' },
    '/block': { description: 'Bloquear usuario', action: 'block' },
    '/unblock': { description: 'Desbloquear usuario', action: 'unblock' },
    '/fav': { description: 'Marcar como favorito', action: 'favorite' }
  }

  useEffect(() => {
    if (message.startsWith('/')) {
      const cmd = Object.keys(commands).find(key => key.startsWith(message))
      if (cmd && commands[cmd]) {
        setCurrentCommand({ command: cmd, ...commands[cmd] })
        setShowCommandSuggestion(true)
      } else {
        setShowCommandSuggestion(false)
      }
    } else {
      setShowCommandSuggestion(false)
    }
  }, [message])

  const handleSendMessage = () => {
    if (message.trim()) {
      if (message.startsWith('/')) {
        executeCommand(message)
      } else {
        const newMessage = {
          id: messages.length + 1,
          text: message,
          time: new Date().toLocaleTimeString('en-US', { hour12: false }),
          isSystem: false
        }
        setMessages([...messages, newMessage])
      }
      setMessage('')
      setShowCommandSuggestion(false)
    }
  }

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim()
    const [command, ...args] = trimmedCmd.split(' ')

    switch(command) {
      case '/clear':
        setMessages([])
        setScreenCleared(true)
        addSystemMessage('Pantalla limpiada.')
        break
      case '/w':
        setShowOnlineUsers(true)
        break
      case '/block':
        if (args[0]) {
          addSystemMessage(`Usuario ${args[0]} bloqueado`)
        }
        break
      case '/unblock':
        if (args[0]) {
          addSystemMessage(`Usuario ${args[0]} desbloqueado`)
        }
        break
      case '/fav':
        if (args[0]) {
          addSystemMessage(`Usuario ${args[0]} agregado a favoritos`)
        }
        break
      default:
        addSystemMessage(`Comando desconocido: ${command}`)
    }
  }

  const addSystemMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text: text,
      time: new Date().toLocaleTimeString('en-US', { hour12: false }),
      isSystem: true
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleAddAttachment = () => {
    console.log('Add attachment')
  }

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <div className="header-left">
          <h1 className="chat-title">bitchat</h1>
          <span className="user-name">/@anon9680</span>
        </div>

        <div className="header-right">
          <button className="header-btn" onClick={onOpenChannels}>
            <span className="mesh-label">#mesh</span>
          </button>
          <button className="header-btn" onClick={onOpenNetwork}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                    fill="var(--text-secondary)"/>
            </svg>
            <span className="peer-count">0</span>
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {screenCleared && messages.length === 0 && (
          <div className="cleared-notice">
            <button className="undo-btn" onClick={() => setScreenCleared(false)}>
              [Deshacer]
            </button>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.isSystem ? 'system-message' : ''}`}>
            <span className="message-text">{msg.text}</span>
            <span className="message-time">[{msg.time}]</span>
          </div>
        ))}
      </div>

      {showCommandSuggestion && currentCommand && (
        <CommandSuggestion
          command={currentCommand.command}
          description={currentCommand.description}
          onExecute={() => {
            executeCommand(currentCommand.command)
            setMessage('')
            setShowCommandSuggestion(false)
          }}
          onDismiss={() => setShowCommandSuggestion(false)}
        />
      )}

      {showOnlineUsers && (
        <OnlineUsers onClose={() => setShowOnlineUsers(false)} />
      )}

      <div className="chat-input-container">
        <div className="input-wrapper">
          <button className="attach-btn" onClick={handleAddAttachment}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>

          <input
            type="text"
            className="message-input"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            onFocus={() => message.startsWith('/') && setShowCommandSuggestion(true)}
          />

          <button className="send-btn" onClick={handleSendMessage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="var(--accent-primary)"/>
            </svg>
          </button>
        </div>

        <div className="input-hint">
          type a message...
        </div>
      </div>
    </div>
  )
}

export default ChatScreen
