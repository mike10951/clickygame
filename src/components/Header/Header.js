import React from "react";

function Header({ score, msg }) {
  return (
    <div className="jumbotron">
      <h1>You have to click every image, but don't repeat yourself!</h1>
      <h2>Score: {score}</h2>
      <h3>{msg}</h3>
    </div>
  );
}

export default Header;
