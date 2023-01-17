import React, { Component } from "react";

class FilterIcon extends Component {
  render() {
    return (
      <div className="filter-icons">
        <div className="filter-icon">
          <input
            onChange={this.props.onChangeMan}
            type="checkbox"
            checked={this.props.valueMan}
          ></input>
          <span>Man</span>
        </div>
        <div className="filter-icon">
          <input
            type="checkbox"
            onChange={this.props.onChangeWoman}
            checked={this.props.valueWoman}
          ></input>
          <span>Woman</span>
        </div>
        <div className="filter-icon">
          <input
            type="checkbox"
            onChange={this.props.onChangeUnknown}
            checked={this.props.valueUnknown}
          ></input>
          <span>Unknown</span>
        </div>
      </div>
    );
  }
}

export default FilterIcon;
