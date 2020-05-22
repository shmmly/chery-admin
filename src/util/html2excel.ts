/*
 * @Author: 流年的樱花逝
 * @Date: 2019-06-26 15:05:23
 * @Last Modified by: 流年的樱花逝
 * @Last Modified time: 2019-06-26 17:08:55
 *
 * @describe:  这个文件用来生成对应的csv文件
 *
 * 这个方法比较粗糙，没有对表格的内容做任何style的修饰，以及对于 表头的合并等
 * 只支持简易的表格输出
 *
 * 如果需要完善可以查看这个地址 完善对应的功能
 * @seee('https://github.com/exceljs/exceljs/blob/f584ea21401b285c07695e81fd2e6852657c76b6/README_zh.md')
 */

import Excel from 'exceljs'
import { ColumnProps } from 'antd/lib/table'
import { saveAs } from 'file-saver'
/* 新建workbook */
interface Html2Excel<T> {
  creator?: string
  sheetName?: string
  antdColumns: ColumnProps<T>[]
  antdDatasource: Partial<T>[]
  filename: string
}

function convertAntdColumn2ExcelColumn<T>(antdColumns: ColumnProps<T>[]) {
  let excelColumn: Partial<Excel.Column>[] = []
  antdColumns.map(antd => {
    if (antd.dataIndex) {
      let obj: Partial<Excel.Column> = {}
      obj.header = antd.title as string
      obj.key = antd.dataIndex as string
      obj.width = (antd.width as number) || 100
      excelColumn.push(obj)
    }
  })
  return excelColumn
}

export function html2Excel<T>(config: Html2Excel<T>) {
  const workbook = new Excel.Workbook()
  workbook.creator = config.creator || '流年的樱花逝'
  workbook.created = new Date(1985, 8, 30)
  workbook.modified = new Date()
  workbook.lastPrinted = new Date(2016, 9, 27)
  workbook.properties.date1904 = true

  /* 创建worksheet */
  const sheet = workbook.addWorksheet(config.sheetName || '数据')
  // 默认使用A4纸作为打印
  sheet.pageSetup.paperSize = 9
  // 将antd的colunm属性转义为excel的colunm属性
  sheet.columns = convertAntdColumn2ExcelColumn(config.antdColumns)
  // 添加数据
  config.antdDatasource.map(data => {
    sheet.addRow(data)
  })
  //   生成文件
  workbook.csv.writeBuffer().then(buffer => {
    saveAs(new Blob([buffer]), `${config.filename}.csv`)
  })
}
