import React, { FC, FormEvent } from 'react'
import styles from './index.module.less'
import { Form, Input, Button, Checkbox, Icon } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import wexin from '../../assets/images/icon32_wx_logo.png'
import otherLogin from './loginConfig'

interface LoginProp {}
const Login: FC<LoginProp & FormComponentProps & RouteComponentProps> = ({
  form: { getFieldDecorator, validateFields },
  history
}) => {
  function handleSubmit(e: FormEvent<HTMLElement>) {
    e.preventDefault()
    validateFields((error, value) => {
      if (!error) {
        history.push('/dash')
      }
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.middle}>
          <div className={styles.loginHeader}>
            <div className={styles.title}>Cherry-admin</div>
            <span className={styles.des}>简洁的管理后台模板</span>
          </div>
          <div className={styles.form}>
            <Form onSubmit={handleSubmit}>
              <Form.Item>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: '请输入手机号或邮箱' }]
                })(<Input placeholder="请输入手机号或邮箱" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }]
                })(<Input.Password placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  style={{ width: '100%' }}
                  htmlType="submit"
                >
                  登录
                </Button>
              </Form.Item>
              <Form.Item extra="其他登录">
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Checkbox>记住我</Checkbox>
                  <Link to="/">忘记密码?</Link>
                </div>
              </Form.Item>
              <Form.Item>
                <div
                  className={styles.ohter}
                  style={{
                    marginTop: 10,
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {otherLogin.map((other, index) => (
                    <Icon
                      className={styles.icon}
                      type={other.type}
                      key={index}
                      style={{ fontSize: 32 }}
                      onClick={other.method}
                    />
                  ))}
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(
  Form.create<LoginProp & FormComponentProps & RouteComponentProps>()(Login)
)
