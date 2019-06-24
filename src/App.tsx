import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import BaseLayout from './layout/BaseLayout'
import Login from './pages/Login/Login'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route>
        <Route path="/login" extra   component={Login} />
        <BaseLayout />
      </Route>
    </BrowserRouter>
  )
}

export default App
