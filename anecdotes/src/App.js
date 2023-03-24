import { useState } from 'react'

const Title = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const VotedTitle = (props) => {
  return (
    <h1>{props.votedTitle}</h1>
  )
}

const VotesDisplay = (props) => {

  if (props.votes.every((index) => {return index ===0})) {
    return (
      <div>There are no votes yet</div> 
    )
  }
  return (
    <div>has {props.votes[props.highest]} votes</div>
  )
}


const App = () => {
  const title = "Anecdote of the day"
  const votedTitle = "Anecdote with most votes"
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Uint8Array(8))
  const [highest, setHighestAnecdote] = useState(new Uint8Array(8))
  console.log("I am the height!", highest)
  

  const handleAnecdoteClick = () => {
      setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVote(newVotes);
    const highIndex = newVotes.indexOf(Math.max(...newVotes))
    console.log(newVotes)
    setHighestAnecdote(highIndex)

  }

  return (
    <div>
      <Title title={title}/>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleAnecdoteClick}>next anecdote</button>
      <VotedTitle votedTitle={votedTitle} />
      <div>{anecdotes[highest]}</div>
      <VotesDisplay votes={votes} highest={highest} />

    </div>
  )
}

export default App;
