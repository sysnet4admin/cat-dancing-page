function AnimationControls({ 
  isAnimating, 
  animationSpeed, 
  onToggle, 
  onSpeedChange 
}) {
  const speedOptions = [
    { value: 0.5, label: '느리게' },
    { value: 1, label: '보통' },
    { value: 1.5, label: '빠르게' },
    { value: 2, label: '매우 빠르게' }
  ]

  return (
    <div className="animation-controls">
      <div className="speed-controls">
        <label className="speed-label">춤 속도:</label>
        <div className="speed-buttons">
          {speedOptions.map(option => (
            <button
              key={option.value}
              className={`speed-button ${animationSpeed === option.value ? 'active' : ''}`}
              onClick={() => onSpeedChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="keyboard-shortcuts">
        <p className="shortcuts-title">키보드 단축키:</p>
        <div className="shortcuts-list">
          <span>스페이스바/엔터: 시작/정지</span>
          <span>ESC: 정지</span>
          <span>1-4: 속도 조절</span>
        </div>
      </div>
    </div>
  )
}

export default AnimationControls