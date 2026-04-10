import { useMemo } from 'react'
import { motion } from 'framer-motion'

// Soft floating orbs that drift around
function FloatingOrbs() {
  const orbs = useMemo(() => [
    { color: '#e11d48', x: '15%', y: '20%', size: 180, duration: 18, delay: 0 },
    { color: '#f59e0b', x: '80%', y: '15%', size: 140, duration: 22, delay: 3 },
    { color: '#a78bfa', x: '60%', y: '70%', size: 200, duration: 20, delay: 6 },
    { color: '#f472b6', x: '25%', y: '75%', size: 160, duration: 24, delay: 2 },
    { color: '#93c5fd', x: '90%', y: '50%', size: 120, duration: 19, delay: 8 },
  ], [])

  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color}12, ${orb.color}05, transparent 70%)`,
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -30, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
            opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

// Shooting stars that streak across occasionally
function ShootingStars() {
  const stars = useMemo(() => [
    { delay: 2, duration: 1.2, top: '12%', angle: 35 },
    { delay: 7, duration: 1.0, top: '28%', angle: 30 },
    { delay: 13, duration: 1.4, top: '8%', angle: 40 },
    { delay: 19, duration: 1.1, top: '35%', angle: 25 },
    { delay: 26, duration: 1.3, top: '18%', angle: 32 },
  ], [])

  return (
    <>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: star.top,
            left: '-5%',
            width: '80px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
            borderRadius: '1px',
            transform: `rotate(${star.angle}deg)`,
            transformOrigin: 'left center',
            pointerEvents: 'none',
            filter: 'blur(0.3px)',
          }}
          initial={{ x: '-10vw', opacity: 0 }}
          animate={{
            x: ['-10vw', '110vw'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 12 + i * 3,
            ease: 'easeIn',
          }}
        >
          {/* Bright head of the shooting star */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: '-2px',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: 'white',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.4)',
          }} />
        </motion.div>
      ))}
    </>
  )
}

// Tiny floating particles that drift upward
function FloatingParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      color: ['#e11d48', '#f59e0b', '#f472b6', '#a78bfa', '#ffffff'][Math.floor(Math.random() * 5)],
      drift: -30 + Math.random() * 60,
    }))
  , [])

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            bottom: '-5%',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}66`,
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -(window.innerHeight * 1.2)],
            x: [0, p.drift],
            opacity: [0, 0.7, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  )
}

// Subtle grid / mesh glow in the background
function AmbientMesh() {
  return (
    <>
      {/* Top-left warm glow */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-15%',
        width: '50%',
        height: '40%',
        background: 'radial-gradient(ellipse, rgba(225, 29, 72, 0.06), transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom-right gold glow */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-15%',
        width: '50%',
        height: '40%',
        background: 'radial-gradient(ellipse, rgba(245, 158, 11, 0.05), transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Center subtle pulse */}
      <motion.div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '30%',
          background: 'radial-gradient(ellipse, rgba(167, 139, 250, 0.04), transparent 70%)',
          pointerEvents: 'none',
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AmbientMesh />
      <FloatingOrbs />
      <ShootingStars />
      <FloatingParticles />
    </div>
  )
}
