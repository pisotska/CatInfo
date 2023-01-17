import React, { Component } from "react";
import Container from "./container";

class Contacts extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-info">
          If you want to contact me for cooperation,
          <br /> call my managers.
          <br />
          <br />
          Good for everyone.
          <p>♥ meow ♥ </p>
        </div>
        <Container />
      </div>
    );
  }
}

export default Contacts;
