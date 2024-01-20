import './index.css'

const HistoryHeader = props => {
  const {updateSearchinput, searchInput} = props
  return (
    <div className="history-header">
      <img
        className="app-logo"
        alt="app logo"
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
      />
      <div className="search-box-container">
        <img
          className="search-icon"
          alt="search"
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
        />
        <input
          type="search"
          placeholder="Search history"
          className="search-input"
          value={searchInput}
          onChange={updateSearchinput}
        />
      </div>
    </div>
  )
}

export default HistoryHeader
