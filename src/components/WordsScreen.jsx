import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const lines = [
  { text: 'You are my peace...', color: '#fef2f2' },
  { text: 'My strength...', color: '#fef2f2' },
  { text: 'My breath...', color: '#fef2f2' },
  { text: 'My home...', color: '#fbbf24' },
  { text: 'My everything.', color: '#e11d48' },
]

export default function WordsScreen({ onNext }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 1500)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setShowButton(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  return (
    <motion.div
      className="h-full w-full flex flex-col items-center justify-center relative z-20"
      style={{ padding: '40px 32px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #e11d48 0%, transparent 70%)',
          opacity: 0.12,
        }}
      />

      <motion.p
        className="text-pink font-light"
        style={{ fontSize: '12px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '60px', opacity: 0.4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      >
        Words from my heart
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '36px' }}>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className="font-cursive text-center"
            style={{
              fontSize: i === lines.length - 1 ? '40px' : '32px',
              color: line.color,
              textShadow:
                i === lines.length - 1
                  ? '0 0 30px rgba(225, 29, 72, 0.6), 0 0 60px rgba(225, 29, 72, 0.3)'
                  : i === lines.length - 2
                    ? '0 0 20px rgba(245, 158, 11, 0.4)'
                    : 'none',
            }}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={
              i < visibleLines
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 25, scale: 0.95 }
            }
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {line.text}
          </motion.p>
        ))}
      </div>

      {showButton && (
        <motion.button
          onClick={onNext}
          className="btn-glow rounded-full border-2 border-rose text-rose-light font-medium cursor-pointer box-glow"
          style={{ marginTop: '56px', padding: '14px 40px', fontSize: '16px', background: 'rgba(225, 29, 72, 0.12)',paddingBottom:'10px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue ❤️
        </motion.button>
      )}
    </motion.div>
  )
}
