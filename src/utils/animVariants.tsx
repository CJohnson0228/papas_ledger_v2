const scaleAnime = {
  visible: { scale: 1 },
  hidden: { scale: 0.1 },
}

const fadeAnim = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const rotAnim = {
  visible: { opacity: 1, rotate: 0 },
  hidden: { opacity: 0, rotate: -180 },
}

const dropAnim = {
  visible: { y: 0 },
  hidden: { y: -50 },
}

const fadeDropAnim = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -50 },
}

export { dropAnim, fadeAnim, fadeDropAnim, rotAnim, scaleAnime }

