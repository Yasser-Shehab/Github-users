import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function CardList({ profiles }) {
  return (
    <div>
      {profiles.map((user, index) => (
        <Card key={index} {...user} />
      ))}
    </div>
  );
}

export default CardList;
