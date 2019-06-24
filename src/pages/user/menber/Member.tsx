import React, {FC} from 'react'
// import {useMemberQuery} from '../../../graphql'
// import FetchData from '../../../components/fetchData/FetchData'
import {members} from '../../../mock'
import GlobalTable from '../../../components/globalTable/GlobalTable'
import {ColumnProps} from 'antd/lib/table'
import {MemberInfo} from '../../../api/index'
import {Tag} from 'antd'
interface MemberProp {}
const Member: FC<MemberProp> = () => {
  const columns: ColumnProps<MemberInfo>[] = [
    {
      title: '用户id',
      dataIndex: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '手机号',
      dataIndex: 'tel',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render: text =>
        text === 0 ? (
          <Tag color="green">男</Tag>
        ) : (
          <Tag color="magenta">女</Tag>
        ),
    },
    {
      title: '生日',
      dataIndex: 'birthday',
    },
    {
      title: '用户等级',
      dataIndex: 'level',
      render: text =>
        text === 0 ? (
          <Tag color="blue">普通用户</Tag>
        ) : (
          <Tag color="red">高级用户</Tag>
        ),
    },
    {
      title: '状态',
      dataIndex: 'state',
      render: text =>
        text === 0 ? <Tag color="blue">可用</Tag> : <Tag color="red">冻结</Tag>,
    },
  ]

  return (
    <div>
      <GlobalTable columns={columns} datasource={members} hasPagination />
    </div>
  )
}
export default Member
