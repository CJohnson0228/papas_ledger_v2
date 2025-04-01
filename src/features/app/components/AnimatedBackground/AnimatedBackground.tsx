import { AnimatePresence, motion } from "motion/react";

const AnimatedBackground = () => {
  const squares = [
    { startX: '50vw', startY: '40vh', endX: '0vw', endY: '6vh', size: '12rem', delay: 0, color: "bg-card/80" },
    { startX: '50vw', startY: '40vh', endX: '20vw', endY: '75vh', size: '8rem', delay: 0.2, color: "bg-primary/80" },
    { startX: '50vw', startY: '40vh', endX: '32vw', endY: '37vh', size: '15rem', delay: 0.4, color: "bg-card/80" },
    { startX: '50vw', startY: '40vh', endX: '65vw', endY: '10vh', size: '6rem', delay: 0.6, color: "bg-primary/80" },
    { startX: '50vw', startY: '40vh', endX: '80vw', endY: '70vh', size: '10rem', delay: 0.8, color: "bg-card/80" },
    { startX: '50vw', startY: '40vh', endX: '52vw', endY: '40vh', size: '12rem', delay: 0.6, color: "bg-primary/80" },
  ]

  return (
    <div className='absolute inset-0 bg-background w-full h-full overflow-hidden'>
      <AnimatePresence mode='wait'>
        {squares.map((square, index) => (
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