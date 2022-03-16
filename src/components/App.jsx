import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (
    <div>
      {props.q}
      {/* <Answer ans={props.anschoice[0]} />
      <Answer ans={props.anschoice[1]} />
      <Answer ans={props.anschoice[2]} />
      <Answer ans={props.anschoice[3]} /> */}

      {props.anschoice.map(function (choice, index) {
        return <Answer key={index} ans={choice} />;
      })}
    </div>
  );
}

function App() {
  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  // function showAnswerEventHandler() {
  //   // do soething
  // }

  // const showAnswerEventHandler = () => {
  //   // do soemthing
  // }

  console.log("Logging the answerDisplayed variable!!", answerDisplayed);

  let questionNum = 0;
  let correctAnswer = "---";

  if (answerDisplayed === true) {
    const correctIndex = data[questionNum].question.correct_choice_index;
    correctAnswer = data[questionNum].question.choices[correctIndex];
  }

  // If answerDisplayed is true
  // We set correctAnswer to the right correct answer

  return (
    <div className="app">
      Trivia!
      <Question
        q={data[questionNum].question.text}
        anschoice={data[questionNum].question.choices}
      />
      <div>Answer: {correctAnswer}</div>
      <NextButton />
      <button
        onClick={() => {
          // do soemthing
          setAnswerDisplayed(true);
        }}
      >
        Show Answer
      </button>
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

// Using useState in <App />, create a boolean state variable called answerDisplayed to keep track of whether the correct answer is shown.
// Add a button to the App component that will update the state to display the correct answer when it is clicked.
// Create an onClick function that sets the state to display the correct answer choice when your button is clicked.
// HINT: Access the correct answer choice using sample_data.json.
