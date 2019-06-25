import React, { FC } from 'react'
import routes, { RouteConfig } from '../router/router'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb'

interface BreadcumbProps {}
const Breadcumb: FC<BreadcumbProps> = () => {

  return <Breadcrumb> {}</Breadcrumb>
}
export default Breadcumb
