import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    const { avatar_url, name, company } = this.props;
    return (
      <div className="github-profile">
        <img className="profile__img" src={avatar_url} />
        <div className="info">
          <div className="name">{name}</div>
          <div className="company">{company}</div>
        </div>
      </div>
    );
  }
}
