import { navItems } from '../../data/navItems'
import NavLink from './NavLink'
import './NavLinks.css'

export default function NavLinks({ activeId, onSelect }) {
  return (
    <nav className="nav-links">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          onSelect={onSelect}
        />
      ))}
    </nav>
  )
}
