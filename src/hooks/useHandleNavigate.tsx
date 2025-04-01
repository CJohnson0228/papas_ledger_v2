import { useState } from "react"
import { useNavigate } from "react-router"

const useHandleNavigate = () => {
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

export default useHandleNavigate