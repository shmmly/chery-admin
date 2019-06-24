import React, {FC, useRef} from 'react'
import {
  useSprings,
  animated,
  interpolate,
  AnimatedValue,
  SetUpdateCallbackFn,
  ForwardedProps,
} from 'react-spring'
import {useGesture} from 'react-use-gesture'
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import './index.less'
interface DraggableListProp {
  items: any[]
}

const fn = (
  order: any[],
  down: boolean,
  originalIndex: number,
  curIndex: number,
  x: number
) => (index: number) =>
  down && index === originalIndex
    ? {
        x: curIndex * 100 + x,
        scale: 1.1,
        zIndex: '1',
        shadow: 15,
        immediate: (n: string) => n === 'x' || n === 'zIndex',
      }
    : {
        x: order.indexOf(index),
        scale: 1,
        zIndex: '0',
        shadow: 1,
        immediate: false,
      }

const DraggableList: FC<DraggableListProp> = ({items}) => {
  const order = useRef(items.map((_, index) => index))
  //@ts-ignore
  const [springs, setSprings] = useSprings(items.length, fn(order.current)) as [
    AnimatedValue<ForwardedProps<any>>[],
    SetUpdateCallbackFn<any>
  ]
  // useGesture has two args handler and config
  const bind = useGesture(({args: [originalIndex], down, delta: [x]}) => {
    // 获取当前的移动的dom在原始dom中的位置
    const curIndex = order.current.indexOf(originalIndex)
    // 这个含义不是很懂 这个函数是求三者中 大小处于中间位置的值
    const curRow = clamp(
      Math.round((curIndex * 100 + x) / 100),
      0,
      items.length - 1
    )
    // 替换 将curIndex 移动到curRow的位置
    const newOrder = swap(order.current, curIndex, curRow)
    // // @ts-ignore
    // 这里一开始理解补了 后来查看文档发现，在set中，会是一个方法，这个方法会用当前的index作为参数 传递给你
    setSprings(fn(newOrder, down, originalIndex, curIndex, x))
    if (!down) order.current = newOrder
  })
  return (
    <div className="dragcontent">
      {springs.map(({zIndex, shadow, x, scale, y}, i: number) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.interpolate(
              (s: number) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            transform: interpolate(
              [x, scale],
              (x, s) => `translate3d(${x}px,0,0) scale(${s})`
            ),
          }}
          children={items[i]}
        />
      ))}
    </div>
  )
}
export default DraggableList
