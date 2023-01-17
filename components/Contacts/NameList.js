import React, { Component } from "react";
import Contact from "./Contact";

class NameList extends Component {
  render() {
    const personList = this.props.contacts.map((person) => {
      return (
        <Contact
          name={person.lastName}
          firstName={person.firstName}
          phone={person.phone}
          gender={person.gender}
        />
      );
    });
    return <div className="contact-box">{personList}</div>;
  }
}
export default NameList;

/*
    const personList = this.props.contacts.map((person) => {
      return <h2 key={person.id}>{person.lastName}</h2>;
    });
    return <div>{personList}</div>;
    */
