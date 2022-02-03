import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import '../css/play.css'
function Play(props) {

    const myPick = props.mine;
    const housePick = props.house;
    const [playerPickElement, setPlayerElement] = useState("");
    const [housePickElement, setHouseElement] = useState("");
    const [resultMessage, setResultMessage] = useState("");

    const [playerWins, setPlayerWins] = useState(false);
    const [houseWins, setHouseWins] = useState(false);

    function chooseWinner() {
        if (myPick === "rock" && housePick === "scissors") {
            setPlayerWins(true);
            setHouseWins(false);
        } else if (myPick === "rock" && housePick === "paper") {
            setHouseWins(true);
            setPlayerWins(false);
        } else if (myPick === "scissors" && housePick === "paper") {
            setPlayerWins(true);
            setHouseWins(false);
        } else if (myPick === "scissors" && housePick === "rock") {
            setHouseWins(true);
            setPlayerWins(false);
        } else if (myPick === "paper" && housePick === "rock") {
            setPlayerWins(true);
            setHouseWins(false);
        } else if (myPick === "paper" && housePick === "scissors") {
            setHouseWins(true);
            setPlayerWins(false);
        } else {
            setHouseWins(false);
            setPlayerWins(false);
        }
    }

    function showWinner() {

        const currentScore = props.score;

        if (playerWins) {
            props.setScore(currentScore + 1);
            setResultMessage("You Win");
        } else if (houseWins) {
            props.setScore(currentScore - 1);
            setResultMessage("You Lose");
        } else {
            setResultMessage("Draw");
        }
    }

    function setMyPickIcon(pick) {
        if (pick === "rock") {
            return rockIcon;
        } else if (pick === "paper") {
            return paperIcon;
        } else if (pick === "scissors") {
            return scissorsIcon;
        }
    }

    useEffect(() => {

      chooseWinner();
      showWinner();
      

  }, [setHouseElement, houseWins, playerWins])

   
    return (
        < div className="total">
          <div className="me">
            <h1>You Picked</h1>
            <img src={setMyPickIcon(myPick)} alt="icon" />
          </div>
        <div className="mid">
          <h3 className="result">{resultMessage}</h3>
          <button className="btn">
          <Link className="li" to="/" onClick={()=>(props.setHousePick())}>Play Again</Link>
          </button>
          </div>
  <div className="house">
        <h1>House Picked </h1>
        <img src={setMyPickIcon(housePick)} alt="icon" />
      </div>
    </div>

    )
    }
export default Play;
