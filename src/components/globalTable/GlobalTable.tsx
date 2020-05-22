/*
 * @Author: 流年的樱花逝
 * @Date: 2019-06-20 15:12:25
 * @Last Modified by: 流年的樱花逝
 * @Last Modified time: 2019-06-20 16:18:06
 *
 * @comment
 *
 * 这个组件封装了 table 的一些基本操作
 * 包括了 分页 排序
 *
 * @issue 怎么创建带有泛型的函数组件
 *
 */
import React, { FC, useState, useEffect, ReactNode } from 'react'
import { Table, Input, Button } from 'antd'
import styles from './index.module.less'
import {
  ColumnProps,
  PaginationConfig,
  TableCurrentDataSource,
  SorterResult
} from 'antd/lib/table'
import { FormConfig } from '../../api'
import GlobalModal from './GlobalModal'
interface GlobalTableProp {
  columns: ColumnProps<any>[]
  // 新增或者修改的表单配置
  formConfig?: FormConfig[]
  // 表格展示的数据内容
  datasource: any
  // 是否带有分页
  hasPagination?: boolean
  // 是否有边框
  brodered?: boolean
  // 内部自动调用api获取数据
  fetchFun?: (page: number, pageSize: number, args?: string) => void
  // 是否有新增按钮
  hasCreate?: boolean
  // 是否有导出按钮
  hasExport?: boolean
  // 新增按钮对应的文字
  createText?: ReactNode | string
  // 导出按钮对应的文字
  exportText?: ReactNode | string
  // modalform的显示控制
  visible: boolean
  // 新增按钮
  onCreate?: () => void
  // modal 确认的回调
  onOk?: (args: any) => void
  // modal取消的回调
  onCancel?: () => void
  // 导出功能
  onExport?: () => void
  // modal的标题
  title?: string
}

const GlobalTable: FC<GlobalTableProp> = ({
  columns,
  datasource,
  hasPagination = false,
  brodered = true,
  fetchFun,
  hasCreate = false,
  hasExport = true,
  createText = '新增',
  exportText = '导出',
  formConfig,
  visible = false,
  onCreate,
  onOk,
  onCancel,
  onExport,
  title
}) => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  useEffect(() => {
    fetchFun && fetchFun(page, pageSize)
  }, [page, pageSize])

  const pagination = hasPagination
    ? ({
        position: 'bottom',
        total: datasource.total,
        current: datasource.current || page,
        pageSize: datasource.pageSize || pageSize,
        showQuickJumper: true,
        showTotal: total => `共${total}条`
      } as PaginationConfig)
    : false
  // 分页等操作
  function handleOnChange(
    pagination: PaginationConfig,
    filters: Record<keyof any, string[]>,
    sorter: SorterResult<any>,
    extra: TableCurrentDataSource<any>
  ) {
    setPage(pagination.current || page)
    setPageSize(pagination.pageSize || pageSize)
  }
  // 搜索操作
  // 搜索操作 肯定会将页数重置
  function handleSearch(value: string) {
    fetchFun && fetchFun(1, 10, value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Input.Search onSearch={handleSearch} className={styles.input} />
        {hasCreate && (
          <Button type="primary" onClick={onCreate}>
            {createText}
          </Button>
        )}
        {hasExport && (
          <Button type="primary" onClick={onExport}>
            {exportText}
          </Button>
        )}
      </div>
      <Table
        rowKey={record => record.id}
        columns={columns}
        dataSource={datasource.list}
        onChange={handleOnChange}
        pagination={pagination}
        bordered={brodered}
      />
      {formConfig && onOk && onCancel && title && (
        <GlobalModal
          title={title}
          onOk={onOk}
          onCancel={onCancel}
          visible={visible}
          formConfig={formConfig}
        />
      )}
    </div>
  )
}
export default GlobalTable
