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
      <DraggableList
        items={[
          <div style={{width: 100, height: 10}}>1</div>,
          <div style={{width: 100, height: 10}}>1</div>,
          <div style={{width: 100, height: 10}}>1</div>,
          <div style={{width: 100, height: 10}}>1</div>,
        ]}
      />

      <animated.div style={props}>我是spring 我开始滚动啦🔥</animated.div>
    </div>
  )
}
export default Dash
