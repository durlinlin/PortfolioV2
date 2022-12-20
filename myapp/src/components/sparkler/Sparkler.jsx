import React from 'react'
import Sparkle from 'react-sparkle'

export default function Sparkler() {
  return (
    <div className='bg-sparkles' style={{
      position: 'absolute', height: '200vh',
      width: '100vw',
      zIndex: '-1'
    }}>
      <Sparkle
        color={'#d8d8ff'}
        minSize={3}
        maxSize={10}
        overflowPx={0}
        fadeOutSpeed={5}
        newSparkleOnFadeOut={true}
        flicker={true}
        flickerSpeed={'slowest'}
      />
  </div>
  )
}
