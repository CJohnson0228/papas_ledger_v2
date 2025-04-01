import { Button } from "@/components/ui/button";
import userAtom from "@/features/auth/state/userAtom";
import useHandleNavigate from "@/hooks/useHandleNavigate";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from 'motion/react';
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

function Landing() {
  const user = useAtom(userAtom)
  const { isExiting, handleNavigate } = useHandleNavigate()

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

  const handleBegin = () => {
    if (user) {
      handleNavigate('dashboard')
    } else {
      handleNavigate('auth')
    }
  }

  return (
    <AnimatePresence mode='wait'>
      {!isExiting && <motion.div
        id='Splash-Page'
        key={location.pathname}
        exit={{ opacity: 0, transition: { when: 'afterChildren', duration: 0.5, delay: 0.3 } }}
        className="z-10 relative w-screen h-screen overflow-hidden font-heading text-primary-foreground text-4xl">
        <AnimatedBackground />
        <div className="relative flex flex-col justify-center items-center gap-5 w-screen h-screen font-sans">
          <motion.div
            initial={headingVariants.hidden}
            exit={headingVariants.hidden}
            animate={headingVariants.visible}
            key='SplashHeading'
            id='Splash-Heading'
            className="flex flex-col justify-center items-center mb-3">
            <div className="drop-shadow-md font-heading text-primary text-4xl md:text-7xl">Papa's Ledger</div>
            <div className="self-center -mt-2 font-sans text-muted-foreground text-xs md:text-lg">Track Every Dollar, Balance Every Account</div>
          </motion.div>
          <motion.div
            initial={sloganVariants.hidden}
            exit={sloganVariants.hidden}
            animate={sloganVariants.visible}
            id='Splash-Slogan'
            key='Splash-Slogan'
            className="flex flex-col justify-center items-center max-w-4xl">
            <div className="mb-3 text-foreground text-lg md:text-2xl text-center">Master Your Money with Ease</div>
            <div className="text-muted-foreground md:text-md text-sm text-center">Stay on top of your finances with seamless,<br /> checkbook-style tracking across multiple accounts.</div>
            <div className="text-muted-foreground md:text-md text-sm text-center">Simple, powerful, and always in sync—<br />because every dollar counts.</div>
          </motion.div>
          <motion.div
            initial={buttonVariants.hidden}
            exit={buttonVariants.hidden}
            animate={buttonVariants.visible}
            id='Splash-Button'
            key='Splash-Button'
            className="mt-5">
            <Button onClick={handleBegin}>BEGIN</Button>
          </motion.div>
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default Landing
