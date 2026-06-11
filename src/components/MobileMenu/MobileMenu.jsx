import { AnimatePresence, motion } from 'framer-motion'
import { navItems } from '../../data/navItems'
import './MobileMenu.css'

export default function MobileMenu({ isOpen, activeId, onSelect }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-menu-link ${activeId === item.id ? 'is-active' : ''}`}
              onClick={() => onSelect(item.id)}
            >
              {item.label}
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
