import React, { FC, ReactNode } from 'react'
import styles from './index.module.less'
interface ContainerCardProps {}

const ContainerCard: FC<ContainerCardProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
export default ContainerCard
