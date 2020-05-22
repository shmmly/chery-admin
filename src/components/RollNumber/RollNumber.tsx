import React, { FC } from 'react'
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
interface RollNumberProps {
  from: number
  to: number
}
const RollNumber: FC<RollNumberProps> = ({ from, to }) => {
  return (
    <Spring from={{ number: from }} to={{ number: to }} config={{
        duration:5000    
    }}>
      {props => <span>{props.number.toFixed(2)}</span>}
    </Spring>
  )
}
export default RollNumber
