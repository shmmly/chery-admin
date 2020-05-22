import React, { FC, useState } from 'react'
// import {useMemberQuery} from '../../../graphql'
// import FetchData from '../../../components/fetchData/FetchData'
import { members } from '../../../mock'
import GlobalTable from '../../../components/globalTable/GlobalTable'
import { ColumnProps } from 'antd/lib/table'
import { MemberInfo } from '../../../api/index'
import { Tag, Input, Popconfirm, Divider } from 'antd'
import { html2Excel } from '../../../util/html2excel'
interface MemberProp {}
const Member: FC<MemberProp> = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const [title, setTitle] = useState<string>('')

  const [member, setMember] = useState<MemberInfo>()

  const columns: ColumnProps<MemberInfo>[] = [
    {
      title: '用户id',
      dataIndex: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'username'
    },
    {
      title: '手机号',
      dataIndex: 'tel'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render: text =>
        text === 0 ? <Tag color="green">男</Tag> : <Tag color="magenta">女</Tag>
    },
    {
      title: '生日',
      dataIndex: 'birthday'
    },
    {
      title: '用户等级',
      dataIndex: 'level',
      render: text =>
        text === 0 ? (
          <Tag color="blue">普通用户</Tag>
        ) : (
          <Tag color="red">高级用户</Tag>
        )
    },
    {
      title: '状态',
      dataIndex: 'state',
      render: text =>
        text === 0 ? <Tag color="blue">可用</Tag> : <Tag color="red">冻结</Tag>
    },
    {
      title: '操作',
      render: (_, row) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <a onClick={() => onEdit(row)}>编辑</a>
          <Divider type="vertical" />
          <Popconfirm
            placement="top"
            title={'确认删除吗？'}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <a type="danger">删除</a>
          </Popconfirm>
        </div>
      )
    }
  ]
  const formConfig = [
    {
      label: '用户id',
      rules: [],
      field: 'id',
      component: <Input />,
      initValue: member && member.id
    },
    {
      label: '用户名',
      rules: [],
      field: 'name',
      component: <Input />,
      initValue: member && member.username
    }
  ]

  function confirm() {}

  function onCreate() {
    setTitle('新建会员管理')
    setVisible(true)
  }

  function onEdit(row: MemberInfo) {
    setVisible(true)
    setMember(row)
    setTitle('编辑会员管理')
  }

  function onOk(args: any) {
    setVisible(false)
  }

  function onCancel() {
    setVisible(false)
  }
  function onExport() {
    html2Excel<MemberInfo>({
      antdColumns: columns,
      antdDatasource: members.list && members.list,
      filename: '会员管理'
    })
  }

  return (
    <div>
      <GlobalTable
        title={title}
        visible={visible}
        columns={columns}
        datasource={members}
        hasPagination
        hasCreate
        onCreate={onCreate}
        formConfig={formConfig}
        onOk={onOk}
        onExport={onExport}
        onCancel={onCancel}
      />
    </div>
  )
}
export default Member
