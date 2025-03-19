function ListItem( { task, index } ) {

    return (
        <li className="task">
            <h2>Title: {task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Time: {task.time}</p>
            {/* <p>Index: {index}</p> */}
        </li>
    )
}

export default ListItem