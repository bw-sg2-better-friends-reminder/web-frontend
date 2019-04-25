import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";


const LoginCard = styled.div`
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
  margin-bottom: 0;
`;

const LoginTitle = styled.h2`
  margin-top: 0;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 5px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const RadioInputs = styled.div`
  margin-bottom: 10px;
`;

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    errorMsg: null,
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = process.env.BACKEND_URL;

    axios
      .post(endpoint, this.state)
      .then(response => {
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("userId", response.data.user_id);
        localStorage.setItem("username", response.data.username);
        // localStorage.setItem("userType", response.data.user.role);
        // this.setState({ userType: localStorage.getItem("userType") });
        // this.props.getUserType(this.state.userType);
        this.props.history.push(`/user/${localStorage.getItem("userId")}`);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <LoginCard>
        <LoginTitle>Login:</LoginTitle>
        <StyledForm>
          <StyledInput
            type="text"
            placeholder="username"
            name="username"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <StyledInput
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Submit onClick={this.handleSubmit}>Submit</Submit>
        </StyledForm>
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#282B2D" }}
        >
          Sign Up
        </Link>
      </LoginCard>
    );
  }
}

const mapStateToProps = state => ({
  employeeList: state.employeeList,
  userType: state.userType
});

export default connect(
  mapStateToProps,
  {
   
  }
)(Login);