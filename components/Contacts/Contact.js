import React, { Component } from "react";
import iconMale from "../Contacts/img/male.png";
import iconFemale from "../Contacts/img/female.png";

class Contact extends Component {
  state = {
    isOpened: false,
  };

  changeState = () => {
    this.setState((state) => ({
      isOpened: !state.isOpened,
    }));
  };

  render() {
    return (
      <div className="mainName" onClick={this.changeState}>
        {this.props.name}
        {this.props.gender == "male" ? (
          <img className="photo" src={iconMale} />
        ) : this.props.gender == "female" ? (
          <img className="photo" src={iconFemale} />
        ) : null}
        {this.state.isOpened && (
          <div className="main-box">
            <p className="additionalInf">name:{this.props.firstName}</p>
            <p className="additionalInf">phone:{this.props.phone}</p>
            <p className="additionalInf">gender:{this.props.gender}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Contact;
