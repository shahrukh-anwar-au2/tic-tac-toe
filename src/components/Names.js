import React, { Component } from "react";

class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstUser: "",
      secondUser: ""
    };
  }

  handleChangeFirst = e => {
    this.setState({
      firstUser: e.target.value
    });
  };

  handleChangeSecond = e => {
    this.setState({
      secondUser: e.target.value
    });
  };

  handleClick = () => {
    const { firstUser, secondUser } = this.state;
    if (firstUser !== "" && secondUser !== "") {
      this.props.display(firstUser, secondUser);
    }
  };

  render() {
    const { firstUser, secondUser } = this.state;
    return (
      <div>
        <span>X</span>
        <input
          type="text"
          onChange={this.handleChangeFirst}
          value={firstUser}
        />
        <br />
        <span>O</span>
        <input
          type="text"
          onChange={this.handleChangeSecond}
          value={secondUser}
        />
        <input type="submit" value="Submit" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Names;
