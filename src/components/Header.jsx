import React from "react";
import '../css/header.css'
const Header = ({ score }) => {
  return (
    <div className="cont">
    <header >
            <h1 className="title">
                <div className="header">Rock</div>
                <div className="header">Paper</div>
                <div className="header">Scissors</div>
            </h1>

            <div className="score">{score}
            <div className="sc">Score</div>
            </div>
        </header>
        </div>
  );
};

export default Header;