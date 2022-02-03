import React from "react";
import ReactDOM from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";
import '../css/modal.css'

const Modal = ({ toggle }) => {
  return(
    <div className="c">
      <button className="btns" onClick={toggle}>
            <img className="image" src={close} alt="Close" srcset="" />
          </button>
      <div className="headerm">
          <h1>Rules</h1>
          
          </div>
        <img src={rules} alt="Rules" srcset="" />
    </div>
  );
};

export default Modal;