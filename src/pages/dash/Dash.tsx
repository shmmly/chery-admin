import React, { FC } from 'react'
import './index.less'
import ContainerCard from '../../components/ContainerCard/ContainerCard'
import { Icon, Divider, Row, Col } from 'antd'
import RollNumber from '../../components/RollNumber/RollNumber'
interface DashProp {}

const Dash: FC<DashProp> = () => {
  return (
    <div>
      <Row gutter={12}>
        <Col span={6}>
          <ContainerCard cls='bg-1'>
            <h3>数据展示</h3>
            <p>上个月数据展示</p>
          </ContainerCard>
        </Col>
        <Col span={6}>
          <ContainerCard cls='bg-2'>
            <h3>数据展示</h3>
            <p>上个月数据展示</p>
          </ContainerCard>
        </Col>
        <Col span={6}>
          <ContainerCard cls='bg-3'>
            <h3>数据展示</h3>
            <p>上个月数据展示</p>
          </ContainerCard>
        </Col>
        <Col span={6}>
          <ContainerCard cls='bg-3'>
            <h3>数据展示</h3>
            <p>上个月数据展示</p>
          </ContainerCard>
        </Col>
      </Row>
    </div>
  )
}
export default Dash
