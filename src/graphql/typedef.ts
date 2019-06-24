/*
 * @Description: 定义所有的类型
 * @Author: 流年的樱花逝
 * @Date: 2019-06-21 15:32:36
 * @GitHub: https://github.com/shmmly
 */

/**
 * @description: 定义接口 用来映射graphql的类型
 */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export interface BaseSchame {
  id: Scalars['String']
  createAt: Scalars['DateTime']
  updateAt: Scalars['DateTime']
}

/* -------------------------------------------------------------------------- */
/*                                 下面是query的定义                                */
/* -------------------------------------------------------------------------- */

/* ------------------------------- 用户管理--会员管理 ------------------------------- */
export interface MemberSchema extends BaseSchame {
  // 昵称
  nickname: Scalars['String']
  // 头像
  avatar: Scalars['String']
  //  性别
  sex: Scalars['String']
  // 手机号
  mobile: Scalars['String']
  // 登录状态
  status: Scalars['String']
  // 会员登录
  userLeval: Scalars['String']
  // 上次登录ip
  lastLoginIp: Scalars['String']
  // 上次登录时间
  lastLoginAt: Scalars['DateTime']
}





export default {}
