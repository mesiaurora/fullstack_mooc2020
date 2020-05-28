import React from 'react'
import Course from './components/Course'

// App
const App = (props) => {
  return (
    <div>
      <ul>
        {props.courses.map((course, i) =>
          <Course key={course.id} course={course.name} parts={course.parts} />
        )}
      </ul>
    </div>
  )
}

export default App
