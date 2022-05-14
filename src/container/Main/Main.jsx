import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-content">
          <h1>The Github Cards App</h1>
          <Card />
        </div>
      </div>
    );
  }
}
