import { useState } from "react"
import { useNavigate } from "react-router"

const useHandleNaviagte = () => {
  const [isExiting, setIsExiting] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = (url: string) => {
    setIsExiting(true)
    setTimeout(() => {
      navigate(url)
    }, 1000)
  }

  return { isExiting, handleNavigate }
}

export default useHandleNaviagte