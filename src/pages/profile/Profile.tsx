import React, { FC, useState, useEffect } from 'react'
import {
  Row,
  Col,
  Avatar,
  Icon,
  Divider,
  Tag,
  Progress,
  Tabs,
  Timeline,
  Card
} from 'antd'
import ContainerCard from '../../components/ContainerCard/ContainerCard'
import styles from './index.module.less'
import profileConfigs from './profileConfig'
import IconFont from '../../components/iconFont/IconFont'
const { TabPane } = Tabs
const { Meta } = Card
interface ProfileProps {}
const Profile: FC<ProfileProps> = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  return (
    <div>
      <Row gutter={12}>
        <Col span={8}>
          <ContainerCard style={{ background: '#fff' }}>
            <div className={styles.header}>
              <Avatar
                className={styles.avatar}
                src="http://ptqg3vb51.bkt.clouddn.com/hdImg_33d471f141b9449ebf29c9d59a1e62ae15616183339.jpg"
              />
              <div className={styles.name}>shmily</div>
              <div className={styles.motto}>繁花似锦觅安宁 行云流水度此生</div>
              <div className={styles.dec}>
                {profileConfigs.map((config, index) => (
                  <div key={index} className={styles.decItem}>
                    {config.icon && <Icon type={config.icon} />}
                    {config.iconFont && <IconFont type={config.iconFont} />}
                    <span className={styles.text}>{config.describe}</span>
                  </div>
                ))}
              </div>
            </div>
            <Divider type="horizontal" style={{ margin: '12px 0' }} />
            <div className={styles.dec}>
              <h4 style={{ margin: 12 }}>标签</h4>
              <div>
                {['vue', 'react', 'anglura', 'java', 'node'].map(
                  (item, index) => (
                    <Tag color="magenta" key={index}>
                      {item}
                    </Tag>
                  )
                )}
              </div>
            </div>
            <Divider type="horizontal" style={{ margin: '12px 0' }} />
            <div className={styles.dec}>
              <h4 style={{ margin: 12 }}>技能</h4>
              <div>
                {['vue', 'react', 'anglura', 'java', 'node'].map(
                  (item, index) => (
                    <div>
                      {item} <Progress percent={30} key={index} showInfo />
                    </div>
                  )
                )}
              </div>
            </div>
          </ContainerCard>
        </Col>
        <Col span={16}>
          <ContainerCard style={{ background: '#fff' }}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="心路历程" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="工作经历" key="2">
                <div className={styles.dec}>
                  <Timeline>
                    <Timeline.Item>
                      <span>2017.5-至今</span>
                      <ContainerCard
                        style={{ background: '#fff', marginTop: 10 }}
                      >
                        <h4>北斗天汇科技有限公司(泰州)</h4>
                        <p>健康数据平台</p>
                      </ContainerCard>
                    </Timeline.Item>
                    <Timeline.Item>
                      <span>2017.5-至今</span>
                      <ContainerCard
                        style={{ background: '#fff', marginTop: 10 }}
                      >
                        2015-09-01
                      </ContainerCard>
                    </Timeline.Item>
                    <Timeline.Item>
                      <span>2017.5-至今</span>
                      <ContainerCard
                        style={{ background: '#fff', marginTop: 10 }}
                      >
                        Create a services site 2015-09-01 Create a services site
                        2015-09-01
                      </ContainerCard>
                    </Timeline.Item>
                    <Timeline.Item>
                      <span>2017.5-至今</span>
                      <ContainerCard
                        style={{ background: '#fff', marginTop: 10 }}
                      >
                        Create a services site 2015-09-01 Create a services site
                        2015-09-01
                      </ContainerCard>
                    </Timeline.Item>
                  </Timeline>
                </div>
              </TabPane>
              <TabPane tab="开源项目" key="3">
                <Row gutter={12}>
                  <Col span={12}>
                    <Card
                      loading={loading}
                      cover={
                        <img
                          alt="demo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                      }
                      actions={[
                        <span>
                          <Icon type="star-o" /> 100
                        </span>,
                        <span>
                          <Icon type="share-alt" />,
                        </span>,
                        <span>
                          <Icon type="ellipsis" />
                        </span>
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      loading={loading}
                      cover={
                        <img
                          alt="demo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                      }
                      actions={[
                        <span>
                          <Icon type="star-o" /> 100
                        </span>,
                        <span>
                          <Icon type="share-alt" />,
                        </span>,
                        <span>
                          <Icon type="ellipsis" />
                        </span>
                      ]}
                    >
                      <Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                      />
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </ContainerCard>
        </Col>
      </Row>
    </div>
  )
}
export default Profile
