import React, { FC, useState, useMemo, useCallback } from 'react'
import { Layout, Menu, Icon, Card, Breadcrumb } from 'antd'
import routes, { mapObj, redictMap, pathName } from '../router/router'
import {
  Link,
  Switch,
  withRouter,
  RouteComponentProps,
  Route
} from 'react-router-dom'
import './index.less'
import { generateRoute } from '../util'
import IconFont from '../components/iconFont/IconFont'
const { Header, Content, Sider } = Layout
const { SubMenu, Item } = Menu
interface BaseLayoutProp {}

const BaseLayout: FC<BaseLayoutProp & RouteComponentProps> = ({
  history: { location }
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const [openKey, setOpenkey] = useState<string[]>(['首页'])

  const pathSnippets = location.pathname.split('/').filter(i => i)

  /**
   * 这里组织对应的面包屑，通过2个对象 匹配到路由中对应的路由名称
   */
  const extraBreadcrumbItemsMemo = pathSnippets.map((_, index) => {
    const url = '/' + `${pathSnippets.slice(0, index + 1).join('/')}`
    const redicturl = redictMap[url]

    return redicturl ? (
      <Breadcrumb.Item key={url}>
        <Link to={redicturl}>{mapObj[url]}</Link>
      </Breadcrumb.Item>
    ) : (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{mapObj[url]}</Link>
      </Breadcrumb.Item>
    )
  })

  const breadcurbItems = [
    <Breadcrumb.Item key="/dash">
      {<Link to="/dash">首页</Link>}
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItemsMemo)

  function toggle() {
    setCollapsed(!collapsed)
  }
  const flatRoute = generateRoute(routes)

  /* 菜单栏只能打开一个父节点，避免菜单过长 ，页面出现滚动条 */
  function handleOnOpenChange(openkeys: string[]) {
    const lastOpenkey = openkeys.find(key => openKey.indexOf(key) === -1)
    if (lastOpenkey) {
      if (pathName.indexOf(lastOpenkey) === -1) {
        setOpenkey(openkeys)
      } else {
        setOpenkey([lastOpenkey])
      }
    } else {
      setOpenkey([])
    }
  }

  return (
    <Layout className={'layout'}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={256}
        className="sider"
      >
        <div>title</div>
        <Menu
          mode="inline"
          className={'menuList'}
          theme="dark"
          openKeys={openKey}
          onOpenChange={handleOnOpenChange}
        >
          {routes.map(route =>
            route.children && route.children.length > 0 ? (
              <SubMenu
                key={route.name}
                title={
                  route.redirect ? (
                    <Link
                      to={route.redirect}
                      style={{ color: 'rgba(255,255,255,.65)' }}
                    >
                      <span>
                        {route.icon && <Icon type={route.icon} />}
                        {route.iconFont && <IconFont type={route.iconFont} />}
                        {route.redirect && <span>{route.name}</span>}
                      </span>
                    </Link>
                  ) : (
                    <span>
                      {route.icon && <Icon type={route.icon} />}
                      {route.iconFont && <IconFont type={route.iconFont} />}
                      <span>{route.name}</span>
                    </span>
                  )
                }
              >
                {route.children.map(
                  child =>
                    child.show !== false && (
                      <Item key={child.name}>
                        <Link to={child.path}>
                          <span>{child.name}</span>
                        </Link>
                      </Item>
                    )
                )}
              </SubMenu>
            ) : (
              <Item key={route.name}>
                <Link to={route.path}>
                  {route.icon && <Icon type={route.icon} />}
                  {route.iconFont && <IconFont type={route.iconFont} />}
                  <span>{route.name}</span>
                </Link>
              </Item>
            )
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className={'tigger'}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content className="content">
          {location.pathname === '/dash' ? null : (
            <div className="content-header">
              <Breadcrumb style={{ marginBottom: 12 }}>
                {breadcurbItems}
              </Breadcrumb>
              <span className="title">{mapObj[location.pathname]}</span>
            </div>
          )}

          <div className="content-body">
            <Switch>
              {flatRoute.map(route => (
                <Route
                  key={route.name}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default withRouter(BaseLayout)
