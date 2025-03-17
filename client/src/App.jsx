import './App.css'

function App() {
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
    }
  ]

  return (
    <>
      <h1>Todo App !</h1>
      <ol>
        <li>
          <h2>Have Breakfast</h2>
          <p>2 eggs on toast</p>
          <p>7am</p>
        </li>
        <li>
          <h2>{data[1].title}</h2>
          <p>{data[1].description}</p>
          <p>{data[1].time}</p>
        </li>
      </ol>
    </>
  )
}

export default App
