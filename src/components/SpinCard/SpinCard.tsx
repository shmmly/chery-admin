import React, { CSSProperties, FC, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import './index.less'
interface SpinCardProp {}

const SpinCard: FC<SpinCardProp> = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [flipped, setFlipped] = useState<boolean>(false)

  const { transform, opacity } = useSpring<any>({
    opacity: flipped ? 1 : 0,
    transform: `rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  function handleOnclick(e: React.MouseEvent<HTMLDivElement>) {
    setFlipped(prevState => !prevState)
  }

  return (
    <div onClick={handleOnclick} ref={divRef}>
      <animated.a
        className="c box"
        style={{
          opacity: opacity.interpolate((o: number) => 1 - o),
          transform
        }}
      >
        11111
      </animated.a>
      <animated.a
        className="c box"
        style={{
          opacity,
          transform: transform.interpolate((t: any) => `${t} rotateX(180deg)`)
        }}
      >
        22222
      </animated.a>
    </div>
  )
}
export default SpinCard
