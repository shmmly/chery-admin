export interface Config {
  type: string
  // 这里描述对应授权的方法
  method: () => void
}
const otherLogin: Config[] = [
  {
    type: 'qq',
    method: () => {}
  },
  {
    type: 'wechat',
    method: () => {}
  },
  {
    type: 'github',
    method: () => {}
  },
  {
    type: 'alipay',
    method: () => {}
  },
  {
    type: 'weibo-circle',
    method: () => {}
  }
]

export default otherLogin
