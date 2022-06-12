import React from 'react'
// import { hydrateRoot } from 'react-dom/client';
import {Todo} from '../Mycomponents/Todo';
export const Todos = (props) => {
   let mystyle={
       minHeight:'50vh',
   }
    return (
        <div className='container' style={mystyle} my3>
            <h3 className="text-center my8" >Todo List</h3>
            {
                props.todos.length===0?"No Todos to display":
            
            props.todos.map((todo)=>
            {
                return (<><Todo todo={todo} key={todo.sr} onDelete={props.onDelete}/> <hr/></>)
            })}
                
        </div>
    )
}
