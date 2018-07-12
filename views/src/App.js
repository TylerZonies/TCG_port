import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNav from './components/NavBar/navBar';
import Home from './components/Home/homePage'
import logo from './logo.svg';
import Collection from './components/Collection/collection';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn: false,

    }
  }
  componentDidMount(){
    const cardArr =[];
    axios.get('')
  
  }
  handleAuth = () => {

  }
  handleLogOut = () => {

  }
  render() {
    return (
      <Router>
        <div>
        <Route path='/' render={(props) => <HeaderNav {...props} isLoggedIn={this.state.isLoggedIn} handleAuth={this.handleAuth} handleLogout={this.handleLogOut} />} />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} isLoggedIn={this.state.isLoggedIn} /> } />
          <Route exact path='/collection' render={(props) => <Collection {...props} isLoggedIn={this.state.isLoggedIn} />} />
          {/* <Route exact path='/organize' render={(props) => <Organize {...props} isLoggedIn={this.state.isLoggedIn} />} />
          <Route exact path='/account' render={(props) => <Account {...props} isLoggedIn={this.state.isLoggedIn} />} /> 
          <Route component={NoMatch} /> */}
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
