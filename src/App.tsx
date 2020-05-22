import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './layout/BaseLayout'
import Login from './pages/Login/Login'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route path="/login" extra component={Login} />
          <BaseLayout />
        </Switch>
      </Route>
    </BrowserRouter>
  )
}

export default App
