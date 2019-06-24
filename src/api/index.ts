/*
 * @Description: 所有类型的定义文件
 * @Author: 流年的樱花逝
 * @Date: 2019-06-24 09:28:22
 * @GitHub: https://github.com/shmmly
 */
export interface BaseInfo {
  // 对应id
  id: number
  // 数据库创建时间
  createAt: string
  // 数据库更新时间
  updateAt: string
}

export interface Response<T> {
  total: number
  current: number
  pageSize: number
  list: T[]
}
// 会员管理
export interface MemberInfo extends BaseInfo {
  // 用户名
  username: string
  // 电话
  tel: string
  // 性别
  sex: number
  // 生日
  birthday: string
  // 用户等级
  level: number
  // 用户登录状态
  state: number
}

// 品牌制造商
export interface BrandInfo extends BaseInfo {
  // 品牌名称
  name: string
  // 品牌logo
  picture: string
  // 品牌描述
  detail: string
  // 底价
  price: number
}

export interface OrderInfo extends BaseInfo {
  // 用户id
  userid: number
  // 订单id
  orderid: string
  // 订单状态
  state: number
  // 订单金额
  orderPrice: number
  // 支付金额
  payPrice: number
  // 支付时间
  payTime: string
  // 物流单号
  logisticsNum: string
}
