import {RouteConfig} from '../router/router'

/**
 * 
 * 后期会改造，因为需要添加权限auth
 * 生成路由
 * 这里由于一级路由没有组件 所以不生成对应的route
 */
export function generateRoute(routes: RouteConfig[]): RouteConfig[] {
  let result: any[] = []
  routes.map(route => {
    route.component && result.push(route)
    if (route.children && route.children.length > 0) {
      route.children.map(child => {
        result.push(child)
      })
    }
  })
  return result
}
