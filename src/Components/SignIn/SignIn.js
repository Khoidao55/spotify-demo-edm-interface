import React from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignIn.css";

import { signInWithGoogle } from "../../FireBase/FireBase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <text className="label">I already have an account</text>
        <span style={{ color: "black", paddingLeft: "5px" }}>
          Sign in with your email and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div style={{ paddingLeft: "25px" }}>
            <CustomButton
              className="signin-button custom-button-full"
              type="submit"
            >
              Sign In
            </CustomButton>

            <CustomButton
              className="signin-button custom-button-full"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
