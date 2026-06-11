import { AnimatePresence, motion } from 'framer-motion'
import { pageContent } from './pageContent'
import './MainContent.css'

export default function MainContent({ activeId }) {
  const page = pageContent[activeId] ?? pageContent.home

  return (
    <main className="main-content">
      <AnimatePresence mode="wait">
        <motion.section
          key={activeId}
          className="main-content-panel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <h1>{page.title}</h1>
          <p>{page.body}</p>
        </motion.section>
      </AnimatePresence>
    </main>
  )
}
