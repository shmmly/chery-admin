/*
 * @Description:
 * @Author: 流年的樱花逝
 * @Date: 2019-06-24 09:21:45
 * @GitHub: https://github.com/shmmly
 */
import {Response, MemberInfo, BrandInfo, OrderInfo} from '../api/index'
export const members: Response<Partial<MemberInfo>> = {
  total: 2,
  current: 1,
  pageSize: 10,
  list: [
    {
      id: 0,
      username: 'ceshi1',
      tel: '15195958515',
      sex: 1,
      birthday: '1989-10-27',
      level: 0,
      state: 0,
    },
    {
      id: 1,
      username: 'ceshi2',
      tel: '15195958515',
      sex: 0,
      birthday: '1989-10-27',
      level: 0,
      state: 0,
    },
  ],
}

export const brands: Response<Partial<BrandInfo>> = {
  total: 2,
  current: 1,
  pageSize: 10,
  list: [
    {
      id: 0,
      name: '三星',
      picture: '',
      price: 200,
      detail: '我是不可描述的三星',
    },
    {
      id: 1,
      name: '苹果',
      picture: '',
      price: 400,
      detail: '我是不可描述的苹果',
    },
  ],
}

export const orders: Response<Partial<OrderInfo>> = {
  total: 2,
  current: 1,
  pageSize: 10,
  list: [
    {
      id:0,
      userid: 0,
      orderid: '232323',
      state: 0,
      orderPrice: 12,
      payPrice: 12,
      payTime: '2019-10-29',
      logisticsNum: '121212',
    },
    {
      id:1,
      userid: 1,
      orderid: '11111',
      state: 0,
      orderPrice: 12,
      payPrice: 12,
      payTime: '2019-10-28',
      logisticsNum: '121212',
    },
  ],
}
