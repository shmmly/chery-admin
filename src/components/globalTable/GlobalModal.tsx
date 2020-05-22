import React, { FC } from 'react'
import { FormConfig } from '../../api'
import { Modal, Form } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
interface GlobalModalProps {
  formConfig: FormConfig[]
  visible: boolean
  onOk: (args: any) => void
  onCancel: () => void
  title: string
}
const GlobalModal: FC<GlobalModalProps & FormComponentProps> = ({
  formConfig,
  form: { getFieldDecorator, validateFields },
  visible,
  onOk,
  onCancel,
  title
}) => {
  function handleOk() {
    validateFields((error, value) => {
      if (!error) {
        onOk(value)
      }
    })
  }

  function handleCancel() {
    onCancel()
  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 4 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 16 },
      sm: { span: 16 }
    }
  }


  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      onOk={handleOk}
      title={title}
    >
      <Form {...formItemLayout}>
        {formConfig.map(config => (
          <Form.Item key={config.field} label={config.label}>
            {getFieldDecorator(config.field, {
              rules: config.rules || [],
              initialValue: config.initValue
            })(config.component)}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  )
}
export default Form.create<GlobalModalProps & FormComponentProps>()(GlobalModal)
