import React, { useRef, FC } from 'react'
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { useGesture } from 'react-use-gesture'
import {
  useSprings,
  animated,
  interpolate,
  AnimatedValue,
  ForwardedProps,
  SetUpdateCallbackFn
} from 'react-spring'
import './index.less'

interface DraggableListProps {
  list: any[]
}

// Returns fitting styles for dragged/idle items
const fn = (
  order: any,
  down?: boolean,
  originalIndex?: number,
  curIndex?: number,
  y: number = 0
) => (index: number) =>
  down && index === originalIndex
    ? {
        y: curIndex && curIndex * 100 + y,
        scale: 1.1,
        zIndex: '1',
        shadow: 15,
        immediate: (n: string): boolean => {
          return n === 'y' || n === 'zIndex'
        }
      }
    : {
        y: order.indexOf(index) * 100,
        scale: 1,
        zIndex: '0',
        shadow: 1,
        immediate: false
      }

const DraggableList: FC<DraggableListProps> = ({ list }) => {
  const order = useRef(list.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
 
  const [springs, setSprings]: [
    AnimatedValue<ForwardedProps<any>>[],
    SetUpdateCallbackFn<any>
     //@ts-ignore
  ] = useSprings(list.length, fn(order.current))
  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      list.length - 1
    )
    const newOrder = swap(order.current, curIndex, curRow)
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder
  })
  return (
    <div className="dcontent" style={{ height: list.length * 100 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(
              (s:number) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            transform: interpolate(
              [y, scale],
              (y, s) => `translate3d(0,${y}px,0) scale(${s})`
            )
          }}
          children={list[i]}
        />
      ))}
    </div>
  )
}
export default DraggableList
