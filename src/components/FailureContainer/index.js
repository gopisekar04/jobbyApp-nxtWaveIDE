import './index.css'

// eslint-disable-next-line import/prefer-default-export
export function FailureContainer({onClick}) {
  return (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We couldn't seem to find the page you are looking for.</p>
      <button className="retry-btn" type="button" onClick={onClick}>
        Retry
      </button>
    </div>
  )
}
