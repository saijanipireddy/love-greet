import { motion } from 'framer-motion'

export default function PromiseScreen({ onNext }) {
  return (
    <motion.div
      className="h-full w-full flex flex-col items-center justify-center relative z-20"
      style={{ padding: '40px 32px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #e11d48 0%, #f59e0b 50%, transparent 70%)',
          opacity: 0.12,
        }}
      />

      <div style={{ maxWidth: '480px', textAlign: 'center', position: 'relative' }}>
        <motion.p
          className="text-pink font-light"
          style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '48px', opacity: 0.35 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A Promise
        </motion.p>

        <motion.p
          className="font-cursive text-pink"
          style={{ fontSize: '24px', lineHeight: 1.5, opacity: 0.85 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          "I didn't just fall in love with you..."
        </motion.p>

        <motion.p
          className="font-cursive text-rose text-glow"
          style={{ fontSize: '32px', lineHeight: 1.4, marginTop: '36px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          "I found my whole life in you."
        </motion.p>

        {/* Divider */}
        <motion.div
          style={{
            height: '1px',
            margin: '40px auto 0',
            background: 'linear-gradient(to right, transparent, #f59e0b, transparent)',
            boxShadow: '0 0 10px rgba(245,158,11,0.3)',
          }}
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        />

        <motion.div
          style={{ marginTop: '40px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <p className="text-pink font-light" style={{ fontSize: '17px', opacity: 0.55, lineHeight: 1.6 }}>
            No matter what life throws at us...
          </p>
          <p className="text-gold text-glow-gold font-medium" style={{ fontSize: '22px', marginTop: '16px' }}>
            I'll always choose you.
          </p>
          <p className="text-pink font-light" style={{ fontSize: '15px', marginTop: '12px', opacity: 0.4 }}>
            Every single day. Forever.
          </p>
        </motion.div>
      </div>

      <motion.button
        onClick={onNext}
        className="btn-glow rounded-full border-2 border-rose text-rose-light font-medium cursor-pointer box-glow"
        style={{ marginTop: '56px', padding: '16px 40px', fontSize: '17px', background: 'rgba(225,29,72,0.12)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        One last thing... 💫
      </motion.button>
    </motion.div>
  )
}
