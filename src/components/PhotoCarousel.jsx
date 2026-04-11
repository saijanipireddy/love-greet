import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const photos = [
  { src: '/photos/1.jpg', caption: 'Where it all began...' },
  { src: '/photos/2.jpg', caption: 'My favorite smile in the world' },
  { src: '/photos/3.jpg', caption: 'Every moment with you is magic' },
  { src: '/photos/4.jpg', caption: 'You make everything beautiful' },
  // { src: '/photos/5.jpg', caption: 'My heart, my home, my love' },
  // { src: '/photos/6.jpg', caption: 'Together is my favorite place to be' },
  // { src: '/photos/7.jpg', caption: 'You are the reason I believe in forever' },
  // { src: '/photos/8.jpg', caption: "Forever isn't long enough with you" },
  // { src: '/photos/9.jpg', caption: "With you, even silence feels like a conversation" },
  // { src: '/photos/10.jpg', caption: "You turned my ordinary life into a love story" },
  // { src: '/photos/11.jpg', caption: "Every day with you feels like a beautiful dream I never want to wake from" },
  // { src: '/photos/12.jpg', caption: "In every lifetime, I will still choose you" },
]

export default function PhotoCarousel({ onNext }) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    if (current < photos.length - 1) setCurrent(current + 1)
  }
  const prev = () => {
    if (current > 0) setCurrent(current - 1)
  }

  return (
    <motion.div
      className="h-full w-full flex flex-col items-center justify-between relative z-20"
      style={{ padding: '28px 16px 24px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.h2
        className="font-cursive text-gold text-glow-gold flex-shrink-0"
        style={{ fontSize: '32px' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Every Frame Holds You
      </motion.h2>

      {/* Photo — takes up most of the screen */}
      <div style={{
        flex: 1,
        width: '100%',
        maxWidth: '380px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 0',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            style={{
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#0a0a1a',
              border: '2px solid rgba(254, 242, 242, 0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(225,29,72,0.08)',
              display: 'flex',
              flexDirection: 'column',
            }}
            initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, rotate: 5 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image — full width, natural aspect ratio */}
            <img
              src={photos[current].src}
              alt={photos[current].caption}
              style={{
                width: '100%',
                maxHeight: '55vh',
                objectFit: 'contain',
                display: 'block',
                background: '#0a0a1a',
              }}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />

            {/* Caption below image */}
            <div style={{
              padding: '14px 16px 16px',
              background: 'rgba(17, 17, 51, 0.5)',
              borderTop: '1px solid rgba(254, 242, 242, 0.06)',
            }}>
              <p
                className="font-cursive text-pink"
                style={{ textAlign: 'center', fontSize: '16px', opacity: 0.6, fontStyle: 'italic' }}
              >
                "{photos[current].caption}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="flex-shrink-0" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        {/* Navigation row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(254,242,242,0.06)',
              border: '1px solid rgba(254,242,242,0.12)',
              color: '#fef2f2',
              fontSize: '18px',
              cursor: current === 0 ? 'not-allowed' : 'pointer',
              opacity: current === 0 ? 0.2 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            ‹
          </button>

          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '18px' : '7px',
                  height: '7px',
                  borderRadius: '4px',
                  background: i === current ? '#e11d48' : 'rgba(254,242,242,0.2)',
                  boxShadow: i === current ? '0 0 10px rgba(225,29,72,0.5)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === photos.length - 1}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(254,242,242,0.06)',
              border: '1px solid rgba(254,242,242,0.12)',
              color: '#fef2f2',
              fontSize: '18px',
              cursor: current === photos.length - 1 ? 'not-allowed' : 'pointer',
              opacity: current === photos.length - 1 ? 0.2 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            ›
          </button>
        </div>

        {/* Next button */}
        <motion.button
          onClick={onNext}
          className="btn-glow rounded-full border-2 border-gold text-gold-light font-medium cursor-pointer box-glow-gold"
          style={{ padding: '12px 36px', fontSize: '15px', background: 'rgba(245,158,11,0.12)', marginBottom: '20px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next ✨
        </motion.button>
      </div>
    </motion.div>
  )
}
