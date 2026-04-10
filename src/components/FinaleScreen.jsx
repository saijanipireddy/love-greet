import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

export default function FinaleScreen() {
  const [showName, setShowName] = useState(false)
  const [showCounter, setShowCounter] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const duration = 5000
    const end = Date.now() + duration
    const frame = () => {
      confetti({
        particleCount: 3, angle: 60, spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#e11d48', '#f59e0b', '#fb7185', '#fbbf24', '#fff'],
      })
      confetti({
        particleCount: 3, angle: 120, spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#e11d48', '#f59e0b', '#fb7185', '#fbbf24', '#fff'],
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()

    setTimeout(() => {
      confetti({
        particleCount: 200, spread: 120,
        origin: { y: 0.55 },
        colors: ['#e11d48', '#f59e0b', '#fb7185', '#fbbf24', '#fff'],
      })
    }, 600)

    setTimeout(() => setShowName(true), 1500)
    setTimeout(() => setShowCounter(true), 3000)
    setTimeout(() => setShowMessage(true), 4500)
  }, [])

  const start = new Date(2019, 0, 10)
  const now = new Date(2026, 3, 11)
  const days = Math.floor((now - start) / (1000 * 60 * 60 * 24))
  const years = Math.floor(days / 365)
  const months = Math.floor((days % 365) / 30)
  const remainDays = days - years * 365 - months * 30

  return (
    <motion.div
      className="h-full w-full flex flex-col items-center justify-center relative z-20"
      style={{ padding: '32px 24px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #e11d48 0%, #f59e0b 40%, transparent 70%)',
          opacity: 0.15,
        }}
      />

      {/* Birthday */}
      <motion.div
        style={{ textAlign: 'center', position: 'relative' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1.5, bounce: 0.4 }}
      >
        <p style={{ fontSize: '64px', lineHeight: 1, marginBottom: '12px' }}>🎂</p>
        <h1 className="font-cursive text-rose text-glow" style={{ fontSize: '38px' }}>
          Happy Birthday <br /> My Love
        </h1>
      </motion.div>

      {/* Name */}
      {showName && (
        <motion.div
          style={{ textAlign: 'center', marginTop: '32px' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
        >
          <h2 className="font-cursive text-gold text-glow-gold" style={{ fontSize: '52px' }}>
            Sahithi
          </h2>
          <p className="text-pink font-light" style={{ fontSize: '16px', letterSpacing: '0.3em', marginTop: '8px', opacity: 0.4 }}>
            Janipireddy
          </p>
        </motion.div>
      )}

      {/* Counter */}
      {showCounter && (
        <motion.div
          style={{ textAlign: 'center', marginTop: '44px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-pink" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '24px', opacity: 0.35 }}>
            Our Love Journey
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <CounterBox value={years} label="Years" />
            <span className="font-cursive text-gold" style={{ fontSize: '24px', marginTop: '-24px' }}>:</span>
            <CounterBox value={months} label="Months" />
            <span className="font-cursive text-gold" style={{ fontSize: '24px', marginTop: '-24px' }}>:</span>
            <CounterBox value={remainDays} label="Days" />
          </div>

          <p className="text-pink" style={{ fontSize: '13px', marginTop: '20px', opacity: 0.25, letterSpacing: '0.1em' }}>
            {days.toLocaleString()} days of pure love ❤️
          </p>
        </motion.div>
      )}

      {/* Final message */}
      {showMessage && (
        <motion.div
          style={{ textAlign: 'center', marginTop: '40px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="font-cursive text-rose-light text-glow" style={{ fontSize: '24px' }}>
            I love you endlessly, Sahithi ❤️
          </p>
          <p className="text-pink" style={{ fontSize: '13px', marginTop: '16px', opacity: 0.25, letterSpacing: '0.1em' }}>
            — Forever yours, with all my heart 💫
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

function CounterBox({ value, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          width: '68px',
          height: '68px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(17, 17, 51, 0.8)',
          border: '2px solid rgba(245, 158, 11, 0.3)',
          boxShadow: '0 0 20px rgba(245,158,11,0.1), inset 0 0 20px rgba(245,158,11,0.05)',
        }}
      >
        <span className="text-gold text-glow-gold font-bold" style={{ fontSize: '28px' }}>{value}</span>
      </div>
      <span className="text-pink" style={{ fontSize: '10px', marginTop: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.35 }}>
        {label}
      </span>
    </div>
  )
}
