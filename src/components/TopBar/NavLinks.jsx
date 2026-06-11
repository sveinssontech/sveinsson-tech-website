import { navItems } from '../../data/navItems'
import './NavLinks.css'

export default function NavLinks({ activeId, onSelect }) {
  return (
    <nav className="nav-links">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-link ${activeId === item.id ? 'is-active' : ''}`}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
