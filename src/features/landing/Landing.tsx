import { Button } from "@/components/ui/button";
import useHandleNaviagte from "@/hooks/useHandleNavigate";
import { AnimatePresence, motion } from 'motion/react';

function Splash() {
  const { isExiting, handleNavigate } = useHandleNaviagte()

  // motion variants
  const headingVariants = {
    visible: {
      opacity: 1, scale: 1,
      transition: { when: 'beforeChildren', ease: 'easeInOut', duration: 0.5 }
    },
    hidden: {
      opacity: 0, scale: 0,
      transition: { when: 'afterChildren', ease: 'easeInOut', duration: 0.5, delay: 0.3 }
    },
  }
  const sloganVariants = {
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { when: 'afterChildren', ease: 'easeInOut', duration: 0.5, delay: 0.3 }
    },
    hidden: {
      opacity: 0, y: 100, scale: 0,
      transition: { when: 'beforeChildren', ease: 'easeInOut', duration: 0.5, delay: 0.3 }
    },
  }
  const buttonVariants = {
    visible: {
      opacity: 1, y: 0,
      transition: { when: 'afterChildren', ease: 'easeInOut', duration: 0.5, delay: 0.6 }
    },
    hidden: {
      opacity: 0, y: 200,
      transition: { when: 'beforeChildren', ease: 'easeInOut', duration: 0.5 }
    },
  }

  return (
    <AnimatePresence mode='wait'>
      {!isExiting && <motion.div
        id='Splash-Page'
        key={location.pathname}
        exit={{ opacity: 0, transition: { when: 'afterChildren', duration: 0.5, delay: 0.3 } }}
        className="relative flex flex-col justify-center items-center gap-5 w-screen h-screen">
        <motion.div
          initial={headingVariants.hidden}
          exit={headingVariants.hidden}
          animate={headingVariants.visible}
          key='SplashHeading'
          id='Splash-Heading'
          className="flex flex-col justify-center items-center mb-3">
          <div className="font-heading text-primary text-4xl md:text-7xl">Papa's Ledger</div>
          <div className="self-center -mt-2 text-muted-foreground md:text-md text-xs">Track Every Dollar, Balance Every Account</div>
        </motion.div>
        <motion.div
          initial={sloganVariants.hidden}
          exit={sloganVariants.hidden}
          animate={sloganVariants.visible}
          id='Splash-Slogan'
          key='Splash-Slogan'
          className="flex flex-col justify-center items-center max-w-4xl">
          <div className="mb-3 text-lg text-center">Master Your Money with Ease</div>
          <div className="text-muted-foreground md:text-md text-sm text-center">Stay on top of your finances with seamless checkbook-style tracking across multiple accounts.</div>
          <div className="text-muted-foreground md:text-md text-sm text-center">Simple, powerful, and always in sync—because every dollar counts.</div>
        </motion.div>
        <motion.div
          initial={buttonVariants.hidden}
          exit={buttonVariants.hidden}
          animate={buttonVariants.visible}
          id='Splash-Button'
          key='Splash-Button'
          className="mt-5">
          <Button onClick={() => handleNavigate('auth')}>BEGIN</Button>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default Splash
