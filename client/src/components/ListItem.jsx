// function ListItem(properties) {
//     const { task } = properties
function ListItem( { task, index } ) {

    return (
        <li>
            <h2>Title: {task.title}</h2>
            <p>Description: {task.description}</p>
            <p>Time: {task.time}</p>
            <p>Index: {index}</p>
        </li>
    )
}

export default ListItem

/*
example to destructure multiple props
  function ListItem({ title, description, time }) {

    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{time}</p>
        </li>
    )
}
*/