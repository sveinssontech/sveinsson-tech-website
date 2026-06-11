import './Hamburger.css'

export default function Hamburger({ isOpen, onClick }) {
  return (
    <button
      className={`hamburger ${isOpen ? 'is-open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span className="hamburger-bar" />
      <span className="hamburger-bar" />
      <span className="hamburger-bar" />
    </button>
  )
}
