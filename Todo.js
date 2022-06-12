import React from 'react'

export const Todo = (props) => {
    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.des}</p>
            <button className="btn btn-danger sm" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        </div>
    )
}
