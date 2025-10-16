import './CommandSuggestion.css'

const CommandSuggestion = ({ command, description, onExecute, onDismiss }) => {
  return (
    <div className="command-suggestion">
      <div className="command-info">
        <div className="command-header">
          <span className="command-label">Comando:</span>
          <code className="command-code">{command}</code>
        </div>
        <p className="command-description">{description}</p>
      </div>

      <div className="command-actions">
        <button className="command-hint" onClick={onDismiss}>
          <code>{command}</code>
          <span className="hint-text">{description}</span>
        </button>
        <button className="execute-btn" onClick={onExecute}>
          Presiona el ícono para {description.toLowerCase()}
        </button>
      </div>
    </div>
  )
}

export default CommandSuggestion
