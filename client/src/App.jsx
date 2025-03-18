import { useState } from 'react'
import './App.css'
import ListItem from "./components/ListItem"

function App() {
  // initialize our state
  const [isTodoListVisible, setIsTodoListVisible] = useState(false)

  const data = [
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
  ]

  const handleClick = () => {
    setIsTodoListVisible(!isTodoListVisible)
    // setIsTodoListVisible(current => !current) also works!
  }

  return (
    <>
      { !isTodoListVisible ? (
        <button onClick={handleClick}>Show Todo List</button>
      ) : (
        <h1>Todo App !</h1>
      )}
      {/* conditionally render todo list only if isTodoListVisible state is true */}
      {isTodoListVisible && (<ol>
          {data.map((task, index) => (
            <ListItem 
                key={index}
                task={task}
                index={index}
            />
          ))}
          {/* will set state to false when button is clicked */}
        <button onClick={handleClick}>Hide Todo List</button>
        </ol>
      )}
    </>
  )
}

export default App
