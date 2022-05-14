import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="github-profile">
        <img className="profile__img" src="https://via.placeholder.com/150" />
        <div className="info">
          <div className="name">Name here...</div>
          <div className="company">Company here..</div>
        </div>
      </div>
    );
  }
}
