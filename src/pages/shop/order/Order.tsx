import React, {FC} from 'react'
import {OrderInfo} from '../../../api'
import {orders} from '../../../mock/index'
import {ColumnProps} from 'antd/lib/table'
import {Tag, Button, Popconfirm} from 'antd'
import GlobalTable from '../../../components/globalTable/GlobalTable'
interface OrderProp {}
const Order: FC<OrderProp> = () => {
  const columns: ColumnProps<OrderInfo>[] = [
    {
      title: '订单编号',
      dataIndex: 'orderid',
    },
    {
      title: '用户id',
      dataIndex: 'userid',
    },
    {
      title: '订单状态',
      dataIndex: 'state',
      render: text =>
        text === 0 ? (
          <Tag color="green">未付款</Tag>
        ) : (
          <Tag color="magenta">已付款</Tag>
        ),
    },
    {
      title: '订单金额',
      dataIndex: 'orderPrice',
    },
    {
      title: '支付金额',
      dataIndex: 'payPrice',
    },
    {
      title: '支付时间',
      dataIndex: 'payTime',
    },
    {
      title: '物流单号',
      dataIndex: 'logisticsNum',
    },
    {
      title: '物流渠道',
      dataIndex: '',
    },

    {
      title: '操作',
      render: row => (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button  type="primary">详情</Button>
          <Button type="primary">付款</Button>
          <Button type="primary">发货</Button>
        </div>
      ),
    },
  ]

  return (
    <div>
      {/* <GlobalTable columns={columns} datasource={orders} hasPagination /> */}
    </div>
  )
}
export default Order
