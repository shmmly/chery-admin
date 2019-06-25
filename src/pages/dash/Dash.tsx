import React, { FC } from 'react'
import './index.less'
import ContainerCard from '../../components/ContainerCard/ContainerCard'
import { Icon, Divider, Row, Col } from 'antd'
import RollNumber from '../../components/RollNumber/RollNumber'
interface DashProp {}

const Dash: FC<DashProp> = () => {
  return (
    <div>
      <ContainerCard>
        <Row gutter={12}>
          <Col span={6}>

            <h3>数据展示</h3>
            <p>上个月数据展示</p>

            



          </Col>
          <Col span={18}></Col>
        </Row>


        
     </ContainerCard>
    </div>
  )
}
export default Dash
