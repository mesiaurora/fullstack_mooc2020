import React from 'react'
import ReactDOM from 'react-dom'

// Represents a header
const Header = (props) => {
  return (
      <div>
          <p>Welcome to {props.course}</p>
      </div>
  )
}

// Represents content of a course
const Content = (props) => {
  const parts = []

  props.parts.map((item, i) => {
      let part = <Part key={i} partname={item.name} exercises={item.exercises}/>
      parts.push(part)
    }
  );

  return (
    <div>
      {parts}
    </div>
  )
}

// Represent a single part of a course
const Part = (props) => {
  return (
      <p>Part: {props.partname}, Exercises: {props.exercises}</p>
  )
}

// Represents total number of exercises
const Total = (props) => {
  let totalExercises = 0

  props.total.forEach((item) => {
    totalExercises = totalExercises + item.exercises
  });

    return (
        <div>
          <p>Number of exercises: {totalExercises}</p>
        </div>
    )
}

// App
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
