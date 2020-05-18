import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  console.log("Header");
  console.log(props)

  return (
      <div>
          <p>Welcome to {props.course}</p>
      </div>
  )
}

const Content = (props) => {
  console.log("Content");
  console.log(props)

  const parts = []

  props.parts.map((item, i) => {
    let part = <Part key={i} partname={item.name} exercises={item.exercises}/>
    parts.push(part)
  });

  return (
    <div>
    {parts}
    </div>
  )
}

const Part = (props) => {
  console.log("Part");
  console.log(props)

  return (
      <p>Part: {props.partname}, Exercises: {props.exercises}</p>
  )
}

const Total = (props) => {
  console.log("Total");
  console.log(props)

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
