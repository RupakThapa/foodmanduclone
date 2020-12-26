import React from "react";
import "./Card.css";
import styled from "styled-components";

const CardHolder = styled.div`
  background: url(${(props) => props.image});
  height: 200px;
`;
function Card(props) {
  return (
    <div className="Card">
      <div className="cardimageholder">
        {/* <img className="cardimage" src={require(`${props.image}`)} /> */}
        <CardHolder image={props.image} className="cardimage" />
      </div>
      <h3 className="ft300">{props.name}</h3>
    </div>
  );
}

export default Card;
