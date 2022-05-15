import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  render() {
    return (
      <form className="search-form">
        <input type="text" placeholder="Github username" />
        <button>Add Card</button>
      </form>
    );
  }
}
