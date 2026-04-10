import { motion } from 'framer-motion'

export default function EntryScreen({ onNext }) {
  return (
    <motion.div
      className="h-full w-full flex flex-col items-center justify-center relative z-20"
      style={{ padding: '40px 24px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Ambient glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, #e11d48 0%, transparent 70%)',
          opacity: 0.2,
        }}
      />

      {/* Pulsing Heart */}
      <motion.div
        className="animate-pulse-glow cursor-pointer"
        style={{ fontSize: '96px', lineHeight: 1 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1.5, bounce: 0.4 }}
      >
        ❤️
      </motion.div>

      {/* Text */}
      <motion.p
        className="text-pink font-light tracking-wide text-center"
        style={{ fontSize: '22px', marginTop: '56px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        I made something for you...
      </motion.p>

      <motion.p
        className="font-cursive text-gold text-center"
        style={{ fontSize: '18px', marginTop: '24px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        just for you, Sahithi
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={onNext}
        className="btn-glow rounded-full border-2 border-rose text-rose-light font-medium tracking-wider cursor-pointer box-glow"
        style={{
          marginTop: '56px',
          padding: '16px 48px',
          fontSize: '18px',
          background: 'rgba(225, 29, 72, 0.15)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(225, 29, 72, 0.4)' }}
        whileTap={{ scale: 0.95 }}
      >
        Open ❤️
      </motion.button>

      {/* Bottom hint */}
      <motion.p
        className="absolute text-pink tracking-widest"
        style={{ bottom: '32px', fontSize: '12px', opacity: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3, duration: 1 }}
      >
        tap to begin ✨
      </motion.p>
    </motion.div>
  )
}
