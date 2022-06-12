import React,{useState} from 'react';

export const Addtodo = (props) => {
    const [Title,setTitle]=useState('');
    const [Des,setDes]=useState('');

    const submit=(e)=>{
        e.preventDefault();
        if(!Title || !Des){
            alert("title or description can't be empty")
        }
        else
        props.addTodo(Title,Des);
    }

    return (
        <div className='container'>
            <h3>ADD A TODO</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text"  className='form-control' value={Title} onChange={(e)=>setTitle(e.target.value)} id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="des" className="form-label">Todo description</label>
                    <input type="text" className='form-control' value={Des} onChange={(e)=>setDes(e.target.value)} id="des" />
                </div>
               
                <button type="Submit" className="btn btn-success sm">Add a todo</button>
            </form>
        </div>
    )
}
