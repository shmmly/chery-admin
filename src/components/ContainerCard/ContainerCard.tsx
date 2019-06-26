import React, { FC} from 'react'
import classNames from 'classnames'
import styles from './index.module.less'
interface ContainerCardProps {
  cls?: string
}

const ContainerCard: FC<ContainerCardProps> = ({ children, cls }) => {
  const classnames = classNames(styles.container, cls)

  return <div className={classnames}>{children}</div>
}
export default ContainerCard
