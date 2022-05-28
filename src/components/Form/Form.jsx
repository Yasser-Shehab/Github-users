import React, { Component, createRef } from "react";
import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  state = { userName: "" };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(resp.data);
      this.setState({ userName: "" });
    } catch (err) {
      switch (err.code) {
        case "ERR_BAD_REQUEST":
          alert("User Not Found");
          break;
        default:
          console.log("Error");
      }
    }
  };
  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          onChange={(event) => this.setState({ userName: event.target.value })}
          value={this.state.userName}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}
