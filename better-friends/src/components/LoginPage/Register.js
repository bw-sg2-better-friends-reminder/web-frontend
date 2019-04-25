import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 10% auto;
  padding-bottom: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  border-radius: 10px;
`;
const LoginLogo = styled.img`
  height: 200px;
  width: auto;
  padding-bottom: 0;
`;

const LoginTitle = styled.h2`
  margin-top: 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 5px;
`;

const Submit = styled.button`
  background: #67ab4c;
  padding: 10px 50px;
  text-align: center;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  color: #282b2d;
  margin: 5px 0 20px;
  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;


class Registration extends React.Component {
  state = {
    username: "", 
    password: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignup = event => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/users/register', {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        axios.post(`http://localhost:5000/users/login`, {
          username: this.state.username,
          password: this.state.password
        })
        .then(() => {
          this.props.history.push(
            `/dates/`
          );
        })
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <RegisterCard>
        <LoginTitle>Create an account:</LoginTitle>
        <StyledForm>
          <StyledInput
            type="text"
            placeholder="username"
            name="username"
            onChange={this.handleChanges}
          />
          <StyledInput
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChanges}
          />
          {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
          <Submit onClick={this.handleSignup}>Submit</Submit>
        </StyledForm>
        <Link to="/" style={{ textDecoration: "none", color: "#282B2D" }}>
          Sign In
        </Link>
      </RegisterCard>
    );
  }
}

export default Registration;

