import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Play from "./components/Play";
import Home from "./components/Home";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const [myPick, setMyPick] = useState("");
  const [housePick, setHousePick] = useState("");
  const [gameScore, setGameScore] = useState(0);


  function newHousePick() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor((Math.random()*3))];
    setHousePick(randomChoice);
}
useEffect(() => {
  newHousePick();
},[setMyPick]);

  return (
    <>
      <Router>
        <div>
          <Header score={gameScore} />
          <Routes className="main">
            <Route exact path="/play"
              element={<Play
                mine={myPick}
                house={housePick}
                score={gameScore}
                setScore={setGameScore}
                setHousePick={newHousePick}
              />}
            />
            <Route excat path="/"
              element={<Home setPick={setMyPick} />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
