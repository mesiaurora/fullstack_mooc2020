import React from 'react'

// Represents a header
const Header = (props) => {
  return (
    <p><b>Welcome to {props.course}</b></p>
  )
}

// Represents content of a course
const Content = (props) => {
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

// Represent a single part of a course
const Part = (props) => {
  return (
    <p> Part: {props.partname}, <br />
    Exercises: {props.exercises} </p>
  )
}

// Represents total number of exercises
const Total = (props) => {
  let totalExercises = 0

  props.total.forEach((item) => {
    totalExercises = totalExercises + item.exercises
  });

    return (
      <p>Number of exercises: {totalExercises}</p>
    )
}

// Represents a course
const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.parts} />
      <Total total={props.parts} />
    </div>
  )
}

export default Course
