import { useState } from 'react'
import './App.css'
import ListItem from "./components/ListItem"
import Form from "./components/Form"

function App() {
  const [isTodoListVisible, setIsTodoListVisible] = useState(false)

  // create state from data array
  const [data, setData] = useState([
    {
      title: "Have Breakfast",
      description: "2 eggs on toast",
      time: "7am"
    },
    {
      title: "Cardio",
      description: "jog 3 miles",
      time: "8am"
    },
    {
      title: "Start work",
      description: "Log onto my machine and open up all relevant software",
      time: "9am"
    },
    {
      title: "Coffee break",
      description: "enjoy!",
      time: "10am"
    }
  ])

  const handleClick = () => {
    setIsTodoListVisible(!isTodoListVisible)
  }

  return (
    <>
      { !isTodoListVisible ? (
        <button onClick={handleClick}>Show Todo List</button>
      ) : (
        <h1>Todo App !</h1>
      )}
      <Form data={data} setData={setData} />
      {isTodoListVisible && (<ol>
          {data.map((task, index) => (
            <ListItem 
                key={index}
                task={task}
                index={index}
            />
          ))}
        <button onClick={handleClick}>Hide Todo List</button>
        </ol>
      )}
    </>
  )
}

export default App
