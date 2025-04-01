import authImg from '@/assets/imgs/authImg.png'
import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from '@/features/app/components/AnimatedBackground/AnimatedBackground'
import useHandleNaviagte from "@/hooks/useHandleNavigate"
import { cn } from "@/lib/utils"
import { AnimatePresence } from "motion/react"
import AuthForm from "../components/AuthForm"

function AuthLayout({ className, ...props }: React.ComponentProps<"div">) {
  const { isExiting, handleNavigate } = useHandleNaviagte()

  // motion variants
  const authVariants = {
    visible: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
    hidden: { opacity: 0, y: 50, transition: { ease: 'easeInOut', duration: 0.5 } }
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <AnimatedBackground />
      <div className={cn("flex gap-6", className)} {...props}>
        <AnimatePresence mode='wait'>
          {!isExiting &&
            <Card
              key='AuthLayout'
              className="z-10 py-0 overflow-hidden"
              initial={authVariants.hidden}
              exit={authVariants.hidden}
              animate={authVariants.visible}
            >
              <CardContent className="grid md:grid-cols-2 p-0">
                <div className="flex justify-center items-center p-6 md:p-8 md:min-h-[540px]">
                  {/* Form Component */}
                  <AuthForm handleNavigate={handleNavigate} />
                  {/* OAuth Options */}
                </div>
                <div className="hidden md:block relative bg-muted">
                  <img
                    src={authImg}
                    alt="Image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AuthLayout
