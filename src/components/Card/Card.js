import React from "react";

function Card({ clickHandler, id, img, name }) {
  return (
    <div className="card-holder p-2 my-auto">
      <img src={img} alt={name} onClick={() => clickHandler(id)} />
    </div>
  );
}

export default Card;
