import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage.js";
import Artist from "./Components/Artist/Artist.js";
import ExploreSection from "./Components/Explore/ExploreSection";
import About from "./Components/About/About";
import SignInandSignUp from "./Components/SignIn-and-SignUp/SignIn-and-SignUp";
import NavBar from "./Components/NavBar/NavBar";
import { auth } from "./FireBase/FireBase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      signInPage: false,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signin" component={SignInandSignUp} />
          <Route exact path="/explore" component={ExploreSection} />
          <Route exact path="/artists" component={Artist} />
        </Switch>
      </div>
    );
  }
}

export default App;
