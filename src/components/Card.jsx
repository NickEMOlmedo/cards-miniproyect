import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ lang, img, fcolor, scolor }) => {
  return (
    <div className="card" style={{background: "red"}}>
      <img src={img} alt="Lang.svg" />
      <h3>{lang}</h3>
    </div>
  );
};

Card.PropTypes = {
  lang: PropTypes.string,
  img: PropTypes.string,
  fcolor: PropTypes.string,
  scolor: PropTypes.string,
};

export default Card;
