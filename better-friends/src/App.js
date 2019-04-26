import React from "react";
import "./App.css";

import  { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import Friends from './components/Friends';
import AddForm from './components/AddForm';
import Login from './components/LoginPage/Login';
import Register from './components/LoginPage/Register';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/dates/:user_id')
      .then(res => {
        console.log(res);
        this.setState({
          
          friends: res.data
        });
        console.log(this.state.friends);
      })
      .catch(err => {
        console.log(err);
      });
  }


  updateFriends = friends => {
    this.setState({
      friends
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Better Friend </h1>
          <h3><marquee behavior="slide" direction="up" scrollamount="1">
            - an app that makes you seem like a better friend by making you a
            lazier one <span>👻</span> -</marquee>
          </h3>
        </header>
        <div className="nav-bar">
          <NavLink to="/add-form">Add a new event</NavLink>
          <NavLink to="/friends">View stored dates</NavLink>
        </div>

        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add-form" 
          render={props => (
          <AddForm 
            {...props}
            addFriend={this.addFriend}
            updateFriends={this.updateFriends}
          />
          )}
          />
          
        <Route path="/friends"  
          render={props => (
          <Friends 
          {...props}
            friends={this.state.friends} 
        />
        )}
        />
        
      </div>
    );
  }
}

export default App;
