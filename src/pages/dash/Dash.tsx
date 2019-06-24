import React, {FC} from 'react'
import DraggableList from '../../components/DraggableList/DraggableList'
import {Card} from 'antd'
interface DashProp {}

const Dash: FC<DashProp> = () => {
  return (
    <div>
      <DraggableList
        items={[
          <Card title="标题" style={{width: 100}}>
            1
          </Card>,
          <Card title="标题" style={{width: 100}}>
            1
          </Card>,
          <Card title="标题" style={{width: 100}}>
            1
          </Card>,
          <Card title="标题" style={{width: 100}}>
            1
          </Card>,
        ]}
      />
    </div>
  )
}
export default Dash
