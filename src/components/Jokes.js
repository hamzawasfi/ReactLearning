import React from "react";
import Joke from "./Joke";
import JokesData from "./JokesData";

function Jokes() {
  const jokeComponents = JokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} answer={joke.answer} />
  ));

  return <React.Fragment>{jokeComponents}</React.Fragment>;
}

export default Jokes;
