import { useState, useEffect, useCallback } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case ' ':
        case 'Enter':
          event.preventDefault()
          toggleAnimation()
          break
        case 'Escape':
          stopAnimation()
          break
        case '1':
          changeSpeed(0.5)
          break
        case '2':
          changeSpeed(1)
          break
        case '3':
          changeSpeed(1.5)
          break
        case '4':
          changeSpeed(2)
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation, stopAnimation, changeSpeed])

  return {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed
  }
}