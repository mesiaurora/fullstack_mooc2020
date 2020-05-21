import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Represents a heading
const Header = (props) => {
  return (
    <p> <b>{props.headerText}</b></p>
  )
}

// Calculates statistics and creates a HTML table of statistics
const Statistic = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  var isFeedbacks = (good > 0 || neutral > 0 || bad > 0)

  // Calculate statistics
  var numberOfFeedback = good + neutral + bad
  var average = (((good * 1) + (neutral * 0) + (bad * -1)) / numberOfFeedback).toFixed(2)
  var positives = (((good/numberOfFeedback) * 100)).toFixed(2)

  // If feedbacks have been given, show table, if not, show text
  if (isFeedbacks) {
    return (
      <table>
        <tbody>
          <StatisticLine statName='Good' counter={props.good} />
          <StatisticLine statName='Neutral' counter={props.neutral} />
          <StatisticLine statName='Bad' counter={props.bad} />
          <StatisticLine statName='All' counter={numberOfFeedback} />
          <StatisticLine statName='Average' counter={average} />
          <StatisticLine statName='Positives' counter={positives + '%'} />
        </tbody>
      </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

// Represents a single line of Statistics table with name and value
const StatisticLine = (props) => {
  return (
    <tr><td>{props.statName} {props.counter}</td></tr>
  )
}

// Represents a button
const Button = ({methodName, buttonText}) => {
  return (
    <button onClick={methodName}>
      {buttonText}
    </button>
  )
}

// Application
const App = (props) => {
  const pageHeader = 'Give feedback'
  const statisticHeader = 'Statistics'
  const noFeedback = 'No feedback given yet'

  // Save button states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Increase a counter
  const increaseByOne = (method, value) => method(value + 1)

  return (
    <div>
      <Header headerText={pageHeader} />
      <Button methodName={() => increaseByOne(setGood, good)} buttonText='good'/>
      <Button methodName={() => increaseByOne(setNeutral, neutral)} buttonText='neutral'/>
      <Button methodName={() => increaseByOne(setBad, bad)} buttonText='bad'/>

      <Header headerText={statisticHeader} />
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

// Render
ReactDOM.render(<App />,
  document.getElementById('root')
)
