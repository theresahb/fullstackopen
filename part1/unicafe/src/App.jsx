import { useState } from 'react'


const StatisticLine = ({ feedback, text }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th scope="row">{text}</th>
          <td>{feedback}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return(
    <div>
      <h2>Statistics</h2>
      <StatisticLine feedback={good} text='Good' />
      <StatisticLine feedback={neutral} text='Neutral' />
      <StatisticLine feedback={bad} text='Bad' />
      <StatisticLine feedback={total} text='Total' />
      <StatisticLine feedback={average} text='Average' />
      <StatisticLine feedback={positive} text='Positive' />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const total = good + neutral + bad;
  const average = total ? (good * 1 + neutral * 0 + bad * -1) / total : 0;
  const positive = total ? good / total * 100 + '%' : 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      { good || neutral || bad ? 
        <Statistics good={good} neutral={neutral} bad={bad} 
        total={total} average={average} positive={positive} />
      : <h2>No feedback given</h2> }
      
    </div>
  )
}

export default App
