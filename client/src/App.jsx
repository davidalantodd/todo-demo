// import useEffect
import { useEffect, useState } from 'react'
import './App.css'
import ListItem from "./components/ListItem"
import Form from "./components/Form"

function App() {
  const [isTodoListVisible, setIsTodoListVisible] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)

  // get rid of hardcoded data so we can fetch todos from backend
  const [data, setData] = useState([])

  // create piece of state (boolean) to track when new tasks are added via the form
  const [newTask, setNewTask] = useState(false)

  const handleClick = () => {
    setIsTodoListVisible(!isTodoListVisible)
  }

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible)
  }

  async function fetchTodos() {
    // make a GET request to http://localhost:3000/todo
    const response = await fetch("http://localhost:3000/todo")
    const todos = await response.json()

    // set the data state to be the API response data
    setData(todos)
  }

  useEffect(() => {
    fetchTodos()
    // put the state that will trigger a rerender into the dependency array
  }, [newTask])

  return (
    <>
      { !isTodoListVisible ? (
        <button onClick={handleClick}>Show Todo List</button>
      ) : (
        <h1>Todo App !</h1>
      )}
      { !isFormVisible ? (
        <button onClick={handleToggleForm}>Show Form</button>
      ) : (
        <>
          <Form setNewTask={setNewTask} />
          <button onClick={handleToggleForm}>Hide Form</button>
        </>
      )
      }
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
