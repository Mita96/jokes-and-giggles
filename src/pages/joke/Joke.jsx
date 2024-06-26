import React, { useEffect, useState } from "react";
import "./joke.css";
import Carousel from "../../utility/Carousel";

function Joke({ jokes }) {
  const [dadJoke, setDadJoke] = useState("");
  const [cliked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((val) => setDadJoke(val));
  }, [cliked]);

  function handleDadJoke() {
    if (index >= jokes.length - 1) {
      setIndex((value) => 0);
    } else {
      setIndex((value) => value + 1);
    }
    setClicked(!cliked);
  }
  return (
    <div className="joke-container">
      <Carousel index={index} jokes={jokes}></Carousel>
      <div className="dad-box">
        <div className="dad-joke-component">
          <span>{dadJoke.joke}</span>
        </div>
        <button className="dad-button" onClick={handleDadJoke}>
          NEXT
        </button>
      </div>
      <Carousel index={index} jokes={jokes}></Carousel>
    </div>
  );
}

export default Joke;
