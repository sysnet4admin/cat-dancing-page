import catImage from '../assets/images/cat.svg'
import AnimationControls from './AnimationControls'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/animations.css'

function DancingCat() {
  const {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div 
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        style={{
          '--animation-speed': animationSpeed
        }}
      >
        <img 
          src={catImage} 
          alt="춤추는 고양이" 
          className="cat-image"
        />
      </div>
      
      <div className="controls">
        <button 
          className="dance-button"
          onClick={toggleAnimation}
        >
          {isAnimating ? '춤 멈추기' : '춤 시작하기'}
        </button>
      </div>
      
      <AnimationControls
        isAnimating={isAnimating}
        animationSpeed={animationSpeed}
        onToggle={toggleAnimation}
        onSpeedChange={changeSpeed}
      />
      
      <div className="status">
        <p className={`status-text ${isAnimating ? 'dancing' : 'idle'}`}>
          {isAnimating ? `🎵 고양이가 ${animationSpeed}배 속도로 춤추고 있어요!` : '😴 고양이가 쉬고 있어요'}
        </p>
      </div>
    </div>
  )
}

export default DancingCat