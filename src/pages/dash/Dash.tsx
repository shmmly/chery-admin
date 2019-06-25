import React, {FC} from 'react'
import DraggableList from '../../components/DraggableList/DraggableList'
import {animated, useSpring} from 'react-spring'
interface DashProp {}

const Dash: FC<DashProp> = () => {
  const props = useSpring({
    from: {opacity: 0, color: 'red'},
    to: async (next: any, cancel: any) => {
      await next({opacity: 1, color: '#ffaaee'})
      await next({opacity: 0, color: 'rgba(14,26,19,1)'})
    },
  })
  return (
    <div>
        
    </div>
  )
}
export default Dash
