import React, {FC, useState} from 'react'
import {Layout, Menu, Icon, Card} from 'antd'
import routes from '../router/router'
import {
  Link,
  Switch,
  withRouter,
  RouteComponentProps,
  Route,
} from 'react-router-dom'
import {useTransition, animated} from 'react-spring'
import './index.less'
import {generateRoute} from '../util'
import IconFont from '../components/iconFont/IconFont'
const {Header, Content, Sider} = Layout
const {SubMenu, Item} = Menu
interface BaseLayoutProp {}
const BaseLayout: FC<BaseLayoutProp & RouteComponentProps> = ({
  history: {location},
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  // const transitions = useTransition(location, location => location.pathname, {
  //   from: {opacity: 0, transform: 'translate3d(0%,0,0)'},
  //   enter: {opacity: 1, transform: 'translate3d(0,0,0)'},
  //   leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
  // })

  function toggle() {
    setCollapsed(!collapsed)
  }
  const flatRoute = generateRoute(routes)

  return (
    <Layout className={'layout'}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={256}
        className="sider">
        <div>title</div>
        <Menu mode="inline" className={'menuList'} theme="dark">
          {routes.map(route =>
            route.children && route.children.length > 0 ? (
              <SubMenu
                key={route.name}
                title={
                  route.redirect ? (
                    <Link
                      to={route.redirect}
                      style={{color: 'rgba(255,255,255,.65)'}}>
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
                }>
                {route.children.map(
                  child =>
                    !child.show && (
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
        <Header style={{background: '#fff', padding: 0}}>
          <Icon
            className={'tigger'}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content className="content">
            <Switch>
              {flatRoute.map(route => (
                <Route
                  key={route.name}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>


          {/* <Route
            render={({location}) => {
              return transitions.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                  <Switch location={item}>
                    {flatRoute.map(route => (
                      <Route
                        key={route.name}
                        path={route.path}
                        component={route.component}
                      />
                    ))}
                  </Switch>
                </animated.div>
              ))
            }}
          /> */}
        </Content>
      </Layout>
    </Layout>
  )
}
export default withRouter(BaseLayout)
