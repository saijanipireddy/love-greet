import { useMemo } from 'react'

export default function Petals({ count = 15 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 8,
      size: 14 + Math.random() * 16,
    }))
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--size': `${p.size}px`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  )
}
