import React, {FC} from 'react'
import GlobalTable from '../../../components/globalTable/GlobalTable'
import {BrandInfo} from '../../../api'
import {ColumnProps} from 'antd/lib/table'
import {Tag, Button, Popconfirm} from 'antd'
import {brands} from '../../../mock/index'
interface BrandProp {}
const Brand: FC<BrandProp> = () => {
  const columns: ColumnProps<BrandInfo>[] = [
    {
      title: '品牌商id',
      dataIndex: 'id',
    },
    {
      title: '品牌商名称',
      dataIndex: 'name',
    },
    {
      title: '品牌商图片',
      dataIndex: 'picture',
    },
    {
      title: '介绍',
      dataIndex: 'detail',
    },
    {
      title: '底价',
      dataIndex: 'price',
    },
    {
      title: '操作',
      render: row => (
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <Button type="primary">编辑</Button>
          <Popconfirm
            placement="top"
            title={'确认删除吗？'}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No">
            <Button type="danger">删除</Button>
          </Popconfirm>
        </div>
      ),
    },
  ]

  function confirm() {}

  return (
    <div>
      <GlobalTable columns={columns} datasource={brands} hasPagination />
    </div>
  )
}
export default Brand
