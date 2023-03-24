import { useState } from 'react'


const FeedBack = (props) => {
  return (
    <div>
      <h1>{props.feedback}</h1>
    </div>

  )
}

const Button = ({ handleClick, text }) => {
  return (

    <button onClick={handleClick}>{text}
    </button>

  )
}

const StatsHead = (props) => {
  return (
    <div>
      <h1>{props.statistics}</h1>
    </div>
  )
}

const StatisticsLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <div>No feedback given</div>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <StatisticsLine text="all" value={props.total} />
          <StatisticsLine text="average" value={props.average} />
          <StatisticsLine text="positive" value={props.positive} />
        </tbody>

      </table>

    </div>
  )
}

const App = () => {
  const feedback = "give feedback"
  const statistics = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    setTotal(updatedGood + neutral + bad)
    setAverage((updatedGood + 0 + (bad * -1)) / (updatedGood + neutral + bad))
    setPositive((updatedGood / (updatedGood + neutral + bad)) * 100)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    setTotal(updatedNeutral + good + bad)
    setAverage((0 + good + (bad * -1)) / (updatedNeutral + good + bad))
    setPositive((good / (updatedNeutral + good + bad) * 100))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    const updatedBad = bad + 1
    setTotal(updatedBad + neutral + good)
    setAverage(((updatedBad * -1) + 0 + good) / (updatedBad + neutral + good))
    setPositive((good / (updatedBad + good + neutral) * 100))
  }



  return (
    <div>
      <FeedBack feedback={feedback} />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <StatsHead statistics={statistics} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App;
