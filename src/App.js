import React,{Component} from 'react'
import {Switch,Route, Redirect} from 'react-router-dom'
import Login from './pages/login/login'

export default class App extends Component{
  render(){
    return(
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin'></Route>
        <Redirect to='/login'/>

      </Switch>
    )
  }
}

