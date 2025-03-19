import { useState } from 'react'

function Form({ data, setData }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')


    const submitHandler = (e) => {
        //prevent default behavior
        e.preventDefault()
        const newTask = {
            title,
            description,
            time
        }
        // use setter method to change data state to add newTask to the array
        setData([...data, newTask])
        //clear our input states
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