const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
  
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <h3>The course includes;</h3>
      <Part course={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part course={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part course={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
  </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course} - {props.exercises} exercises</p>
  </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <h4>The course has {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} exercises in total</h4>
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
      },
    ]
  }
  

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
