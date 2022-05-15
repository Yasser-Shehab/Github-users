import React, { Component } from "react";
import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";
import Form from "../../components/Form/Form";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-content">
          <h1>The Github Cards App</h1>
          <Form />
          <CardList />
        </div>
      </div>
    );
  }
}
