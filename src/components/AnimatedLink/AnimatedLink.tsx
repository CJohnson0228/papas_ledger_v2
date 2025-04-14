import { useNavigate } from 'react-router';
import { Button } from '../ui/button';

// need to keep working on this later
const AnimatedLink = ({ to, children, animationDuration, ...props }) => {
  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault()

    setTimeout(() => {
      navigate(to)
    }, animationDuration * 1000)
  }

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  )
}

export default AnimatedLink
