/*
 * @Description:  这里是整个项目的graphql接口 定义
 * @Author: 流年的樱花逝
 * @Date: 2019-06-21 15:32:47
 * @GitHub: https://github.com/shmmly
 */

import * as ReactApolloHooks from 'react-apollo-hooks'
import {gql} from 'apollo-boost'

/* ---------------------------------- 查询会员 ---------------------------------- */
const MemDoc = gql`
  query Member {
    id
    nickname
    avatar
  }
`
export const useMemberQuery = (
  baseOptions?: ReactApolloHooks.QueryHookOptions<{}>
) => ReactApolloHooks.useQuery(MemDoc, baseOptions)
