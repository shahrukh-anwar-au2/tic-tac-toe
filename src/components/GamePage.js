import React, { Component } from "react";

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chance: this.props.firstUser,
      inputs: {
        firstBox: "",
        secondBox: "",
        thirdBox: "",
        fourthBox: "",
        fifthBox: "",
        sixthBox: "",
        seventhBox: "",
        eightBox: "",
        ninthBox: ""
      }
    };
  }

  checkWon = () => {};

  handleClick = e => {
    const text = this.state.chance === this.props.firstUser ? "X" : "O";
    e.target.innerText = text;
    const chance = text === "X" ? this.props.secondUser : this.props.firstUser;
    this.setState({
      chance: chance
    });
    this.checkWon();
  };

  render() {
    return (
      <div>
        <h1>X: {this.props.firstUser}</h1>
        <h1>O: {this.props.secondUser}</h1>

        <h2>Chance: {this.state.chance}</h2>
        <table>
          <tbody>
            <tr>
              <td onClick={this.handleClick}></td>
              <td onClick={this.handleClick}></td>
              <td onClick={this.handleClick}></td>
            </tr>
            <tr>
              <td onClick={this.handleClick}></td>
              <td onClick={this.handleClick}></td>
              <td onClick={this.handleClick}></td>
            </tr>
            <tr>
              <td onClick={this.handleClick}></td>
              <td onClick={this.handleClick}></td>
              <td onClick={this.handleClick}></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GamePage;
