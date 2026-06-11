import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const randomBetween = (min, max) => min + Math.random() * (max - min)

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const activeElevation = 4

const raiseSpring = { type: 'spring', stiffness: 400, damping: 10 }
const bumpSpring = { type: 'spring', stiffness: 300, damping: 9 }
const restSpring = { type: 'spring', stiffness: 300, damping: 20 }

export default function NavLink({ item, isActive, onSelect }) {
  const controls = useAnimationControls()

  useEffect(() => {
    if (!isActive) {
      controls.start({ y: 0 }, restSpring)
      return
    }

    let cancelled = false

    async function bounceLoop() {
      await controls.start({ y: -activeElevation }, raiseSpring)
      while (!cancelled) {
        await wait(randomBetween(250, 500))
        if (cancelled) return
        await controls.start(
          { y: -activeElevation },
          { ...bumpSpring, velocity: -randomBetween(100, 200) }
        )
      }
    }

    bounceLoop()
    return () => {
      cancelled = true
    }
  }, [isActive, controls])

  return (
    <div className="nav-link-slot">
      <div className="nav-link-back" />
      <motion.div animate={controls}>
        <button
          className={`nav-link ${isActive ? 'is-active' : ''}`}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </button>
      </motion.div>
    </div>
  )
}
