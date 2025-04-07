import { Loader2 } from "lucide-react"

function LoadingPage() {
  return (
    <div className='z-50 fixed flex justify-center items-center bg-black/60 w-screen h-screen text-foreground'>
      <Loader2 className="mr-2 w-5 h-5 animate-spin" /> Loading...
    </div>
  )
}

export default LoadingPage
