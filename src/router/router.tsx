import Dash from '../pages/dash/Dash'
import Member from '../pages/user/menber/Member'
import Address from '../pages/user/address/Address'
import Collect from '../pages/user/collect/Collect'
import Footmark from '../pages/user/footmark/Footmark'
import History from '../pages/user/history/History'
import Feedback from '../pages/user/feedback/Feedback'
import Brand from '../pages/shop/brand/Brand'
import Category from '../pages/shop/category/Category'
import Issue from '../pages/shop/issue/Issue'
import Keyboard from '../pages/shop/keyboard/Keyboard'
import GoodList from '../pages/good/list/GoodList'
import Putaway from '../pages/good/putaway/Putaway'
import Comment from '../pages/good/comment/Comment'
import Advertising from '../pages/popularize/advertising/Advertising'
import Coupon from '../pages/popularize/coupon/Coupon'
import CouponDetail from '../pages/popularize/coupon/CouponDetail'
import Topic from '../pages/popularize/topic/Topic'
import TopicDetail from '../pages/popularize/topic/TopicDetail'
import Grouprole from '../pages/popularize/grouprole/Grouprole'
import Groupactivity from '../pages/popularize/groupactivity/Groupactivity'
import Admin from '../pages/system/admin/Admin'
import Log from '../pages/system/log/Log'
import Oos from '../pages/system/oos/Oos'
import Shop from '../pages/config/shop/Shop'
import Carriage from '../pages/config/carriage/Carriage'
import Wechat from '../pages/config/wechat/Wechat'
import { RouteComponentProps } from 'react-router-dom'
import Orderconfig from '../pages/config/order/Orderconfig'
import Order from '../pages/shop/order/Order'
import Profile from '../pages/profile/Profile';

/*
 * @Author: 流年的樱花逝
 * @Date: 2019-06-20 15:05:23
 * @Last Modified by: 流年的樱花逝
 * @Last Modified time: 2019-06-27 16:58:45
 * @comment 这个文件包含了 整个系统的路由定义
 * @todo
 *  □ 直接使用router生成对应的文件夹，并能够watch router文件内容的变化 直接生成对应的文件夹
 *  □ 生成文件中 直接写有对应的模板
 */

export interface RouteConfig {
  /** 路由名称 */
  name: string
  /**  路由对应的url路径 */
  path: string
  /** 对应的图标 */
  icon?: string
  /** 使用iconFont的图标 */
  iconFont?: string
  /**  跳转 一般用户 顶级菜单 */
  redirect?: string
  /** 子路由配置 */
  children?: RouteConfig[]
  /** 是否在侧边栏展示 */
  show?: boolean
  /** 对应的组件 */
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
  /** 权限配置 */
  meta?: {
    role: string[]
  }
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/dash',
    icon: 'dashboard',
    children: [],
    meta: {
      role: []
    },
    component: Dash
  },
  {
    name: '数据展示',
    path: '/user',
    redirect: '/user/member',
    icon: 'user',
    children: [
      {
        name: '表格展示',
        path: '/user/member',
        meta: {
          role: ['admin']
        },
        component: Member
      },
      {
        name: '图片瀑布流',
        path: '/user/address',
        meta: {
          role: ['admin']
        },
        component: Address
      },
      {
        name: '会员收藏',
        path: '/user/collect',
        meta: {
          role: ['admin']
        },
        component: Collect
      },
      {
        name: '会员足迹',
        path: '/user/footmark',
        meta: {
          role: ['admin']
        },
        component: Footmark
      },
      {
        name: '搜索历史',
        path: '/user/history',
        meta: {
          role: ['admin']
        },
        component: History
      },
      {
        name: '意见反馈',
        path: '/user/feedback',
        meta: {
          role: ['admin']
        },
        component: Feedback
      }
    ]
  },
  {
    name: '图表展示',
    path: '/shop',
    redirect: '/shop/brand',
    iconFont: 'icon-system1',
    children: [
      {
        name: 'threejs3D',
        path: '/shop/brand',
        meta: {
          role: ['admin']
        },
        component: Brand
      },
      {
        name: '商品类目',
        path: '/shop/category',
        meta: {
          role: ['admin']
        },
        component: Category
      },
      {
        name: '订单管理',
        path: '/shop/order',
        meta: {
          role: ['admin']
        },
        component: Order
      },
      {
        name: '通用问题',
        path: '/shop/issue',
        meta: {
          role: ['admin']
        },
        component: Issue
      },
      {
        name: '关键词',
        path: '/shop/keyboard',
        meta: {
          role: ['admin']
        },
        component: Keyboard
      }
    ]
  },
  {
    name: '组件展示',
    path: '/good',
    redirect: '/good/list',
    iconFont: 'icon-Commoditysetup',
    children: [
      {
        name: '可拖拽组件',
        path: '/good/list',
        meta: {
          role: ['admin']
        },
        component: GoodList
      },
      {
        name: '商品上架',
        path: '/good/putaway',
        meta: {
          role: ['admin']
        },
        component: Putaway
      },
      {
        name: '商品评论',
        path: '/good/comment',
        meta: {
          role: ['admin']
        },
        component: Comment
      }
    ]
  },
  {
    name: '推广管理',
    path: '/popularize',
    redirect: '/popularize/advertising',
    iconFont: 'icon-popularize',
    children: [
      {
        name: '广告管理',
        path: '/popularize/advertising',
        meta: {
          role: ['admin']
        },
        component: Advertising
      },
      {
        name: '优惠券管理',
        path: '/popularize/coupon',
        meta: {
          role: ['admin']
        },
        component: Coupon
      },
      {
        name: '优惠券详情',
        path: '/popularize/coupon/:id',
        show: false,
        meta: {
          role: ['admin']
        },
        component: CouponDetail
      },
      {
        name: '专题管理',
        path: '/popularize/topic',
        meta: {
          role: ['admin']
        },
        component: Topic
      },

      {
        name: '专题新建',
        path: '/popularize/topic/create',
        meta: {
          role: ['admin']
        },
        show: false,
        component: TopicDetail
      },
      {
        name: '专题编辑',
        path: '/popularize/topic/update/:id',
        meta: {
          role: ['admin']
        },
        show: false,
        component: TopicDetail
      },
      {
        name: '团购规则',
        path: '/popularize/grouprole',
        meta: {
          role: ['admin']
        },
        component: Grouprole
      },
      {
        name: '团购活动',
        path: '/popularize/groupactivity',
        meta: {
          role: ['admin']
        },
        component: Groupactivity
      }
    ]
  },
  {
    name: '系统管理',
    path: '/system',
    redirect: '/system/admin',
    iconFont: 'icon-system',
    children: [
      {
        name: '管理员',
        path: '/system/admin',
        meta: {
          role: ['admin']
        },
        component: Admin
      },
      {
        name: '操作日志',
        path: '/system/log',
        meta: {
          role: ['admin']
        },
        component: Log
      },
      {
        name: '对象存储',
        path: '/system/oos',
        meta: {
          role: ['admin']
        },
        component: Oos
      }
    ]
  },
  {
    name: '配置管理',
    path: '/config',
    redirect: '/config/shop',
    iconFont: 'icon-system2',
    children: [
      {
        name: '商场配置',
        path: '/config/shop',
        meta: {
          role: ['admin']
        },
        component: Shop
      },
      {
        name: '个人中心',
        path: '/config/profile',
        meta: {
          role: ['admin']
        },
        component: Profile
      },
      {
        name: '运费配置',
        path: '/config/carriage',
        meta: {
          role: ['admin']
        },
        component: Carriage
      },
      {
        name: '订单配置',
        path: '/config/order',
        meta: {
          role: ['admin']
        },
        component: Orderconfig
      },
      {
        name: '小程序配置',
        path: '/config/wechat',
        meta: {
          role: ['admin']
        },
        component: Wechat
      }
    ]
  }
]

/* 简单的映射 */
type MapRoute = {
  [key: string]: string
}

/**
 *  /usr/member ===> 用户管理/会员管理
 *
 *  {'/user':'用户管理,'/member':'会员管理'}
 *
 */
function matchRoute() {
  let mapObj: MapRoute = {}
  routes.map(route => {
    if (route.children && route.children.length > 0) {
      mapObj[route.path] = route.name
      route.children.map(child => {
        mapObj[child.path] = child.name
      })
    } else {
      mapObj[route.path] = route.name
    }
  })

  return mapObj
}
/**
 *  返回subMenu的路由和redicture路由的一对一关系
 *  返回subMenu的名称集合，用在只显示一个主菜单的方法中
 */
function redirectMap() {
  let redictMap: MapRoute = {}
  let pathName: string[] = []
  routes.map(route => {
    if (route.redirect) {
      redictMap[route.path] = route.redirect
      pathName.push(route.name)
    }
  })
  return { redictMap, pathName }
}

export const mapObj = matchRoute()
export const { redictMap, pathName } = redirectMap()
export default routes
