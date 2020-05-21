import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Represents headings in this page
const Heading = (props) => {
  return (
    <p> <b>{props.header}</b></p>
  )
}

// Represents a single anecdote
const Anecdote = (props) => {

  return (
    <p>{props.anecdote}</p>
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
  const pageHeader = 'Anecdotes'
  const topVoted = 'Top voted anecdote:'
  const randomButton = 'Random anecdote'
  const voteButton = 'Vote'

  const numberOfAnecdotes = anecdotes.length

  // Store index of current random anecdote, number of votes and
  // the highest voted anecdote
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(numberOfAnecdotes).fill(0))
  const [highestVoted, setHighest] = useState('')

  // Handles voting and stores new array of votes, and updates the highest voted
  const handleVotes = () => {
    var newArray = [...votes]
    newArray[selected] += 1
    setVotes(newArray)

    var indexOfHighest = newArray.indexOf(Math.max(...newArray))
    setHighest(props.anecdotes[indexOfHighest])
  }

  // Calculates next random number and sets it as the anecdote
  const calculateRandom = () => {
    const random = Math.floor(Math.random() * numberOfAnecdotes)
    setSelected(random)
  }

  return (
    <div>
      <Heading header={pageHeader} />
      <Anecdote anecdote={props.anecdotes[selected]} />
      <Button methodName={handleVotes} buttonText={voteButton} />
      <Button methodName={calculateRandom} buttonText={randomButton} />

      <Heading header={topVoted} />
      <Anecdote anecdote={highestVoted} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
