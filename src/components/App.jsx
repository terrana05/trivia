import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return <div> Question Component </div>;
}

function App() {
  return (
    <div className="app">
      Trivia!
      <Question />
    </div>
  );
}

export default App;

//Goal 1: Render a question from sample_data.json on the screen.
//- [ ] In App.jsx, create a Question component.
//- [ ] Render an instance of `<Question />` inside of `<App />`.
//- [ ] Add props to `<Question />` with the text "Question goes here".
//- [ ] In `<App />`, add a variable to set the current question number to 0.
//- [ ] Replace "Question goes here" with the `question.text` field found in data for the first question.
//  - [ ] HINT: Use the question number variable you just wrote.
//- [ ] BONUS: Add styling to your app.//f
