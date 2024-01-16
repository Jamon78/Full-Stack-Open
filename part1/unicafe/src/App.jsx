import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {

  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>
  } 
  return (
    <div>
      <h1>statistics</h1>
      <table style={{textAlign: 'left'}}>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{good+neutral+bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(good-bad)/(good+neutral+bad)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{100*good / (good+neutral+bad) +" %"}</td>
          </tr>
          
          {/* <tr>
            <StatisticLine text="all" value={good+neutral+bad}/>
          </tr>
          <tr>
            <StatisticLine text="positive" value={100*good/(good+neutral+bad)+" %"}/>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => <td>{text} {value}</td>

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>     
    </div>
  )
}

export default App
