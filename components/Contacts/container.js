import React, { Component } from "react";
import Input from "./input";
import FilterIcon from "./FilterIcon";
import NameList from "./NameList";

const array = [
  {
    firstName: "Іван",
    lastName: "Багряний",
    phone: "+380956319521",
    gender: "male",
    id: 1,
  },
  {
    firstName: "Вікторія",
    lastName: "Андрухович",
    phone: "+380931460123",
    gender: "female",
    id: 2,
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    gender: "unknown",
    id: 3,
  },
  {
    firstName: "Ліна",
    lastName: "Костенко",
    phone: "+380504691254",
    gender: "female",
    id: 4,
  },
  {
    firstName: "Тарас",
    lastName: "Чумак",
    phone: "+380739432123",
    gender: "male",
    id: 5,
  },
  {
    firstName: "Панас",
    lastName: "Мирний",
    phone: "+380956319521",
    gender: "male",
    id: 6,
  },
];

class Container extends Component {
  state = {
    filter: "",
    isMan: true,
    isWoman: true,
    isUnknown: true,
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  sortSexMale = () => {
    this.setState((state) => ({
      isMan: !state.isMan,
    }));
  };

  sortSexFemale = () => {
    this.setState((state) => ({
      isWoman: !state.isWoman,
    }));
  };

  sortSexUnknown = () => {
    this.setState((state) => ({
      isUnknown: !state.isUnknown,
    }));
  };

  render() {
    return (
      <div className="contact-container">
        <Input value={this.state.filter} onInputChange={this.changeFilter} />
        <FilterIcon
          valueMan={this.state.isMan}
          valueWoman={this.state.isWoman}
          valueUnknown={this.state.isUnknown}
          onChangeMan={this.sortSexMale}
          onChangeWoman={this.sortSexFemale}
          onChangeUnknown={this.sortSexUnknown}
        />
        <NameList
          contacts={array
            .filter((item) => item.lastName.includes(this.state.filter))
            .filter(
              (item) =>
                (item.gender === "male" && this.state.isMan) ||
                (item.gender === "female" && this.state.isWoman) ||
                (item.gender === "unknown" && this.state.isUnknown)
            )}
        />
      </div>
    );
  }
}

export default Container;
