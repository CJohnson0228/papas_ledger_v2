import { AnimatePresence, motion } from "motion/react";

const colors = ["bg-card/80", "bg-ring/60", "bg-primary"]

const newSquares = [
  { startX: '50vw', startY: '40vh', endX: '12vw', endY: '2vh', size: '8rem', delay: 0.1, color: colors[1] },
  { startX: '50vw', startY: '40vh', endX: '42vw', endY: '48vh', size: '8rem', delay: 0.4, color: colors[1] },
  { startX: '50vw', startY: '40vh', endX: '72vw', endY: '10vh', size: '8rem', delay: 0.7, color: colors[1] },
  { startX: '50vw', startY: '40vh', endX: '22vw', endY: '72vh', size: '10rem', delay: 0.2, color: colors[0] },
  { startX: '50vw', startY: '40vh', endX: '52vw', endY: '16vh', size: '10rem', delay: 0.5, color: colors[0] },
  { startX: '50vw', startY: '40vh', endX: '82vw', endY: '60vh', size: '10rem', delay: 0.8, color: colors[0] },
  { startX: '50vw', startY: '40vh', endX: '2vw', endY: '82vh', size: '6rem', delay: 0, color: colors[2] },
  { startX: '50vw', startY: '40vh', endX: '32vw', endY: '12vh', size: '6rem', delay: 0.3, color: colors[2] },
  { startX: '50vw', startY: '40vh', endX: '62vw', endY: '60vh', size: '6rem', delay: 0.6, color: colors[2] },
  { startX: '50vw', startY: '40vh', endX: '92vw', endY: '15vh', size: '6rem', delay: 0.9, color: colors[2] },
]

const AnimatedBackground = () => {

  return (
    <div className='absolute inset-0 bg-background w-full h-full overflow-hidden'>
      <AnimatePresence propagate>
        {newSquares.map((square, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: square.startX, y: square.startY, scale: 0.5 }}
            exit={{ opacity: 0, x: square.startX, y: square.startY, scale: 0.5 }}
            animate={{ opacity: 1, x: square.endX, y: square.endY, scale: 1 }}
            transition={{ duration: 1, delay: square.delay, ease: 'easeInOut' }}
            className={`absolute ${square.color} shadow-xl rounded-sm`}
            style={{
              width: square.size,
              height: square.size,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default AnimatedBackground;