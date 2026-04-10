import { motion } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  {
    date: 'Jan 10, 2019',
    title: 'The Day Everything Changed',
    desc: "I didn't know it then, but the moment you walked into my world, my heart had already chosen you.",
    emoji: '💫',
    icon: '✦',
    accent: 'rgba(245, 158, 11, 0.5)',
    accentSolid: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b22, #f59e0b08)',
  },
  {
    date: '2019 – 2021',
    title: 'Our Diploma Days',
    desc: 'Afternoon lunch talks that never felt long enough, stealing glances across the classroom, and those evening calls I lived for — I was falling for you without even realizing.',
    emoji: '🥰',
    icon: '♡',
    accent: 'rgba(244, 114, 182, 0.5)',
    accentSolid: '#f472b6',
    gradient: 'linear-gradient(135deg, #f472b622, #f472b608)',
  },
  {
    date: '2021 – 2022',
    title: 'Through Every Storm, We Held On',
    desc: "Life tested us — distance, misunderstandings, tears. But even on the hardest days, letting go of you was never an option. We chose each other, again and again.",
    emoji: '🌧️',
    icon: '⚡',
    accent: 'rgba(147, 197, 253, 0.5)',
    accentSolid: '#93c5fd',
    gradient: 'linear-gradient(135deg, #93c5fd22, #93c5fd08)',
  },
  {
    date: '2022 – 2024',
    title: 'Closer Than Ever',
    desc: "We stopped just loving each other and started understanding each other. You became my peace, my comfort, my home — the one person who feels like forever.",
    emoji: '🏡',
    icon: '∞',
    accent: 'rgba(167, 139, 250, 0.5)',
    accentSolid: '#a78bfa',
    gradient: 'linear-gradient(135deg, #a78bfa22, #a78bfa08)',
  },
  {
    date: '2024 – 2025',
    title: 'An Unbreakable Bond',
    desc: "No distance, no fight, no storm could shake what we built. This love isn't just strong — it's the most real thing I've ever known.",
    emoji: '🔥',
    icon: '◆',
    accent: 'rgba(52, 211, 153, 0.5)',
    accentSolid: '#34d399',
    gradient: 'linear-gradient(135deg, #34d39922, #34d39908)',
  },
  {
    date: 'Apr 11, 2026',
    title: '2,648 Days of Loving You',
    desc: "Every single day I've loved you more than the last. And if I could go back to Jan 10, 2019 — I'd choose you all over again. Happy Birthday, my everything.",
    emoji: '❤️‍🔥',
    icon: '♥',
    accent: 'rgba(225, 29, 72, 0.5)',
    accentSolid: '#e11d48',
    gradient: 'linear-gradient(135deg, #e11d4833, #e11d4810)',
  },
]

function TimelineCard({ milestone, index, total }) {
  const isLast = index === total - 1
  const isSpecial = isLast

  return (
    <motion.div
      style={{
        display: 'flex',
        gap: '0',
        position: 'relative',
      }}
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Timeline spine */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        width: '52px',
      }}>
        {/* Outer glow ring */}
        <motion.div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            position: 'relative',
            flexShrink: 0,
            zIndex: 2,
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5 + index * 0.3, duration: 0.5, type: 'spring', stiffness: 180 }}
        >
          {/* Animated outer ring */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              border: `2px solid ${milestone.accentSolid}55`,
            }}
            animate={{
              boxShadow: [
                `0 0 8px ${milestone.accent}00`,
                `0 0 20px ${milestone.accent}`,
                `0 0 8px ${milestone.accent}00`,
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
          />

          {/* Node circle */}
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: `radial-gradient(circle at 35% 35%, ${milestone.accentSolid}44, rgba(10, 10, 26, 0.9))`,
              border: `2px solid ${milestone.accentSolid}`,
              boxShadow: `0 0 20px ${milestone.accent}, inset 0 0 15px ${milestone.accent}55`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            }}
          >
            {milestone.emoji}
          </div>
        </motion.div>

        {/* Connecting line with glow */}
        {!isLast && (
          <motion.div
            style={{
              width: '2px',
              flex: 1,
              minHeight: '24px',
              position: 'relative',
              overflow: 'visible',
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.8 + index * 0.3, duration: 0.6, originY: 0 }}
          >
            {/* Main line */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to bottom, ${milestone.accentSolid}77, ${milestones[index + 1]?.accentSolid}77)`,
              borderRadius: '2px',
            }} />

            {/* Glow behind line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-4px',
              width: '10px',
              height: '100%',
              background: `linear-gradient(to bottom, ${milestone.accentSolid}22, ${milestones[index + 1]?.accentSolid}22)`,
              filter: 'blur(4px)',
              borderRadius: '5px',
            }} />

            {/* Traveling light */}
            <motion.div
              style={{
                position: 'absolute',
                left: '-4px',
                width: '10px',
                height: '30px',
                borderRadius: '5px',
                background: `linear-gradient(to bottom, transparent, ${milestone.accentSolid}cc, transparent)`,
                filter: 'blur(3px)',
              }}
              animate={{ top: ['-10%', '110%'] }}
              transition={{
                delay: 1.5 + index * 0.3,
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 4,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Card */}
      <motion.div
        style={{
          flex: 1,
          marginLeft: '14px',
          marginBottom: isLast ? '0' : '16px',
          position: 'relative',
        }}
        whileTap={{ scale: 0.985 }}
      >
        {/* Gradient border wrapper */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '20px',
          padding: '1px',
          background: isSpecial
            ? `linear-gradient(135deg, ${milestone.accentSolid}88, ${milestone.accentSolid}22, ${milestone.accentSolid}66)`
            : `linear-gradient(135deg, ${milestone.accentSolid}55, transparent 60%, ${milestone.accentSolid}22)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }} />

        {/* Card content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          padding: isSpecial ? '22px 20px 20px' : '18px 18px 16px',
          borderRadius: '20px',
          background: isSpecial
            ? `linear-gradient(145deg, rgba(30, 10, 20, 0.85), rgba(10, 10, 26, 0.9))`
            : `linear-gradient(145deg, rgba(17, 17, 51, 0.65), rgba(10, 10, 26, 0.85))`,
          backdropFilter: 'blur(20px)',
          overflow: 'hidden',
        }}>
          {/* Background accent glow */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${milestone.accentSolid}15, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          {/* Top shimmer line */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: `linear-gradient(90deg, transparent 0%, ${milestone.accentSolid}88 50%, transparent 100%)`,
            }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.6 }}
          />

          {/* Date + icon row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
          }}>
            {/* Date pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '20px',
              background: `${milestone.accentSolid}15`,
              border: `1px solid ${milestone.accentSolid}33`,
            }}>
              <span style={{
                fontSize: '11px',
                color: milestone.accentSolid,
                opacity: 0.8,
              }}>
                {milestone.icon}
              </span>
              <span style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: milestone.accentSolid,
              }}>
                {milestone.date}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: isSpecial ? '18px' : '16px',
            fontWeight: 700,
            color: '#fef2f2',
            marginBottom: '8px',
            lineHeight: 1.35,
            letterSpacing: '-0.01em',
          }}>
            {milestone.title}
          </h3>

          {/* Thin accent divider */}
          <div style={{
            width: '36px',
            height: '2px',
            borderRadius: '2px',
            background: `linear-gradient(90deg, ${milestone.accentSolid}, transparent)`,
            marginBottom: '10px',
            opacity: 0.6,
          }} />

          {/* Description */}
          <p style={{
            fontSize: '13px',
            color: 'rgba(254, 242, 242, 0.55)',
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            {milestone.desc}
          </p>

          {/* Special badge for last card */}
          {isSpecial && (
            <motion.div
              style={{
                marginTop: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 16px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(225, 29, 72, 0.2), rgba(245, 158, 11, 0.15))',
                border: '1px solid rgba(225, 29, 72, 0.3)',
              }}
              animate={{
                boxShadow: [
                  '0 0 10px rgba(225, 29, 72, 0.1)',
                  '0 0 25px rgba(225, 29, 72, 0.25)',
                  '0 0 10px rgba(225, 29, 72, 0.1)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span style={{ fontSize: '12px' }}>❤️</span>
              <span style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#fb7185',
                letterSpacing: '0.05em',
              }}>
                Forever & Always
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TimelineScreen({ onNext }) {
  const scrollRef = useRef(null)

  return (
    <motion.div
      className="h-full w-full flex flex-col items-center relative z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title section */}
      <motion.div
        className="flex-shrink-0 text-center"
        style={{ paddingTop: '26px', paddingBottom: '4px' }}
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="font-cursive text-glow-gold"
          style={{ fontSize: '34px', color: '#f59e0b' }}
        >
          Our Journey
        </motion.h2>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '6px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div style={{
            width: '32px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(245, 158, 11, 0.4))',
          }} />
          <span style={{
            fontSize: '11px',
            color: 'rgba(254, 242, 242, 0.35)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 300,
          }}>
            Every chapter of us
          </span>
          <div style={{
            width: '32px',
            height: '1px',
            background: 'linear-gradient(to left, transparent, rgba(245, 158, 11, 0.4))',
          }} />
        </motion.div>
      </motion.div>

      {/* Scrollable timeline */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          width: '100%',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '22px 14px 0',
        }}
      >
        <div style={{ maxWidth: '420px', margin: '0 auto' }}>
          {milestones.map((m, i) => (
            <TimelineCard
              key={i}
              milestone={m}
              index={i}
              total={milestones.length}
            />
          ))}
          <div style={{ height: '16px' }} />
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="flex-shrink-0 flex justify-center" style={{ padding: '18px 0 26px' }}>
        <motion.button
          onClick={onNext}
          className="btn-glow rounded-full border-2 border-gold text-gold-light font-medium cursor-pointer box-glow-gold"
          style={{
            padding: '13px 40px',
            fontSize: '15px',
            background: 'rgba(245, 158, 11, 0.12)',
            marginBottom: '20px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          Next ✨
        </motion.button>
      </div>
    </motion.div>
  )
}
