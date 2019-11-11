import React, { Component } from "react";
import Names from "./components/Names";
import GamePage from "./components/GamePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "names",
      firstUser: "",
      secondUser: ""
    };
  }

  handleDisplay = (firstUser, secondUser) => {
    this.setState({
      display: "gamepage",
      firstUser: firstUser,
      secondUser: secondUser
    });
  };

  render() {
    const component =
      this.state.display === "names" ? (
        <Names display={this.handleDisplay} />
      ) : (
        <GamePage
          firstUser={this.state.firstUser}
          secondUser={this.state.secondUser}
        />
      );

    return <div className="App">{component}</div>;
  }
}

export default App;
