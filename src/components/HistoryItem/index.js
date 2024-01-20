import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const deleteItem = () => {
    deleteHistoryItem(id)
  }
  return (
    <li className="list-item">
      <div className="history-details-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="logo-title-container">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <div className="title-url-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
