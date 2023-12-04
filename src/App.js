import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      {/* <Route exact path="/" component={Home} /> */}
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/products" component={Products} />
      {/* <NotFound /> */}
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route component={NotFound} />
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  </BrowserRouter>
)

export default App
