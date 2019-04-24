import React from "react";
import "./App.css";
import Login from "./components/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("https://better-friend-server.herokuapp.com/dates/:user_id")
      .then(res => {
        console.log(response);
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
        <Login />
      </div>
    );
  }
}

export default App;
