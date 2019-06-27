import React, { FC } from 'react'
import DraggableList from '../../../components/DraggableList/DraggableList'
interface GoodListProp {}
const GoodList: FC<GoodListProp> = () => {
  return (
    <div>
      <DraggableList
        list={[<div>1</div>, <div>1</div>, <div>1</div>, <div>1</div>]}
      />
    </div>
  )
}
export default GoodList
