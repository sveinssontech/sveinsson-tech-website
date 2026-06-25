import { useState, useRef, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import './BouncyButton.css'

const elevatedY = -4
const raiseSpring = { type: 'spring', stiffness: 400, damping: 10 }
const restSpring = { type: 'spring', stiffness: 300, damping: 20 }

export default function BouncyButton({ children, onClick }) {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) {
      controls.start({ y: elevatedY }, raiseSpring)
    } else {
      controls.start({ y: 0 }, restSpring)
    }
  }, [isHovered, controls])

  return (
    <div className="bouncy-button-slot">
      <div className="bouncy-button-back" />
      <motion.div animate={controls}>
        <button
          className="bouncy-button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
        >
          {children}
        </button>
      </motion.div>
    </div>
  )
}
