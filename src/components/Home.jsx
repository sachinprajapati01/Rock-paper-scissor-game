import React, { useState } from "react";
import { Link } from "react-router-dom";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import '../css/home.css'
function Home(props) {

    function playGame(e) {
        props.setPick(e.target.dataset.id);
    }

    return (
        <div className="home">
            <Link to="/play">
          <div className="pic" id="pic1">
                <img data-id="paper"  src={paperIcon} onClick={playGame} />
            </div>
            </Link>
            <Link to="/play">
              <div className="pic" id="pic2">
                <img data-id="rock"  src={rockIcon} onClick={playGame} />
                </div>
            </Link>
            <Link to="/play">
              <div  className="pic" id="pic3">
                <img data-id="scissors" src={scissorsIcon} onClick={playGame} />
                </div>  
          </Link>
            
        </div>
    )
}

export default Home;