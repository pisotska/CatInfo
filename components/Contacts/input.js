import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input-container">
        <h2 className="title">Contacts</h2>
        <input
          className="input"
          type="text"
          placeholder="search"
          onChange={this.props.onInputChange}
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

export default Input;
