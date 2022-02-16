import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (
    <div>
      {props.q}
      <Answer ans={props.anschoice[0]} />
      <Answer ans={props.anschoice[1]} />
      <Answer ans={props.anschoice[2]} />
      <Answer ans={props.anschoice[3]} />
    </div>
  );
}

function App() {
  let questionNum = 0;
  return (
    <div className="app">
      Trivia!
      <Question
        q={data[questionNum].question.text}
        anschoice={data[questionNum].question.choices}
      />
      <NextButton />
    </div>
  );
}

function NextButton(props) {
  return <button> Next Question </button>;
}

function Answer(props) {
  return <p> {props.ans} </p>;
}

export default App;

// Refactor to use map to map over all answer choices.
// Using useState in <App />, create a boolean state variable called answerDisplayed to keep track of whether the correct answer is shown.
// Add a button to the App component that will update the state to display the correct answer when it is clicked.
// Create an onClick function that sets the state to display the correct answer choice when your button is clicked.
// HINT: Access the correct answer choice using sample_data.json.
