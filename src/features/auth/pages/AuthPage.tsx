import authImg from '@/assets/images/authImg.png'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa6"
import { useNavigate } from 'react-router'
import { z } from 'zod'
import { useAuth } from "../hooks/useAuth"
import { authSchema } from "../utils/authSchema"

type AuthFormValues = z.infer<typeof authSchema>;

function AuthLayout({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true);
  const { login, register, isLoading, error } = useAuth();

  const toggleForm = () => setIsLogin((prev) => !prev);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "", first_name: undefined, last_name: undefined },
  });

  const onSubmit = async (data: AuthFormValues) => {
    console.log("Form Data:", data);
    // Call Supabase auth functions here
    if (isLogin) {
      await login(data.email, data.password);
    } else {
      if (data.first_name && data.last_name) {
        await register(data.email, data.password, data.first_name, data.last_name);
      }
    }
    if (!error) {
      navigate('/dashboard');
    }
  };

  // motion variants
  const authVariants = {
    visible: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
    hidden: { opacity: 0, y: 50, transition: { ease: 'easeInOut', duration: 0.5 } }
  }

  return (
    <motion.div className="flex justify-center items-center w-screen h-screen">
      <div className={cn("flex gap-6", className)} {...props}>
        <AnimatePresence mode='wait'>
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
                <div className="flex flex-col justify-center w-96 h-[72vh]">
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={'auth' + isLogin}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full"
                    >
                      <h2 className="mb-4 font-bold text-2xl text-center">{isLogin ? "Login" : "Sign Up"}</h2>
                      {error ? <div>{error}</div> : <div></div>}
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          {!isLogin && (
                            <>
                              <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="First Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Last Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </>
                          )}

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <Input type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="after:top-1/2 after:z-0 after:absolute relative after:inset-0 after:flex after:items-center after:border-t after:border-border text-sm text-center">
                            <span className="z-10 relative bg-card px-2 text-muted-foreground">
                              Or continue with
                            </span>
                          </div>

                          <div className="gap-4 grid grid-cols-3 mt-2">
                            <Button variant="outline" disabled className="w-full">
                              <FaGoogle />
                              <span className="sr-only">Login with Google</span>
                            </Button>
                            <Button variant="outline" disabled className="w-full">
                              <FaApple />
                              <span className="sr-only">Login with Apple</span>
                            </Button>
                            <Button variant="outline" disabled className="w-full">
                              <FaFacebookF />
                              <span className="sr-only">Login with Facebook</span>
                            </Button>
                          </div>

                          <Button type="submit" className="w-full">
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : isLogin ? "Login" : "Sign Up"}
                          </Button>
                        </form>
                      </Form>

                      <div className="text-sm text-center">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <Button variant='link' size='sm' className="mt-2 ml-1 underline underline-offset-4" onClick={toggleForm}>
                          {isLogin ? "Sign Up" : "Login"}
                        </Button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
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
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default AuthLayout
