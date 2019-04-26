import React, { Component } from "react";
import axios from "axios";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      personToSendMessageTo: '',
      phone: '',
      message: ''
    };
  }

  addFriend = event => {
    event.preventDefault();

    let user_id = localStorage.getItem('user_id');
    
    const friend = this.state;
    axios
      .post('http://localhost:5000/dates/:user_id', friend)
      .then(res => {
        this.props.updateFriends(res.data);
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));

    this.setState({
      date: '',
      personToSendMessageTo: '',
      phone: '',
      message: ''
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="AddForm">
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleInputChange}
            placeholder="date"
            value={this.state.date}
            name="date"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="send message to"
            value={this.state.personToSendMessageTo}
            name="personToSendMessageTo"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="phone number"
            value={this.state.phoneNumber}
            name="number"
          />
            <input
            onChange={this.handleInputChange}
            placeholder="message"
            value={this.state.message}
            name="message"
          />
          <button type="submit">{this.props.friend ? `save changes` : `Add Event`}</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
