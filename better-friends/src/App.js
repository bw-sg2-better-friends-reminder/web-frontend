import React from "react";
import "./App.css";

import  { Route } from 'react-router-dom';
import axios from 'axios';

import Friends from './components/Friends';
import AddForm from './components/AddForm'
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
      .get('http://localhost:5000')
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
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
          <strong>Better Friend </strong>
          <p>
            - an app that makes you seem like a better friend by making you a
            lazier one <span>👻</span>
          </p>
        </header>

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
