import { useState } from 'react'

function Form({setNewTask}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')


    const submitHandler = async (e) => {
        e.preventDefault()
        const newTodo = {
            title,
            description,
            time
        }

        // create a new todo in the database by making a POST request
        await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newTodo)
        })
        
        // set the state to be true, so we trigger a rerender (which means a new GET request when this changes)
        setNewTask(true)

        setTitle('')
        setDescription('')
        setTime('')
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <input
                type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder='Time'
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form