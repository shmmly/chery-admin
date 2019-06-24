import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.less'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {ApolloProvider} from 'react-apollo'
import {ApolloProvider as ApolloHooksProvider} from 'react-apollo-hooks'
import client from './graphql/apolloconfig'

// 这里配置client的入口 将graphq和react 关联起来
// 因为使用了 react-apollo-hooks 其实就是把ApolloProvider的内容传递了ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
