import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames'
import styles from './index.module.less'
interface ContainerCardProps {
  cls?: string
  style?: CSSProperties
}

const ContainerCard: FC<ContainerCardProps> = ({ children, cls, style }) => {
  const classnames = classNames(styles.container, cls)

  return (
    <div className={classnames} style={style}>
      {children}
    </div>
  )
}
export default ContainerCard
