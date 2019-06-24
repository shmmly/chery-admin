import React, {FC} from 'react'
import {Spin} from 'antd'
import {QueryHookResult} from 'react-apollo-hooks'
import {OperationVariables} from 'apollo-boost'
interface FetchDataProp {
  useFuc: () => QueryHookResult<{}, OperationVariables>
  render: (data: any) => void
}
const FetchData: FC<FetchDataProp> = ({children, useFuc, render}) => {
  const {data, loading} = useFuc()
  if (loading) {
    return <Spin />
  } else {
    return <>{render(data)}</>
  }
}
export default FetchData
