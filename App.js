import './App.css';
import Header from "./Mycomponents/Header";
// import {Footer}  from "./Mycomponents/Footer";
import {Todos}  from "./Mycomponents/Todos";
import { About } from "./Mycomponents/About";
// import {Todo}  from "./Mycomponents/Todo";
import { Addtodo } from "./Mycomponents/Addtodo";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
function App() {

const addTodo=(title,des)=>{
  console.log('Add TODO');
  let sr;  
  if(todos.length===0){
    sr=0;
  }
else
    sr=todos[todos.length-1].sr +1;

   const tod={
     sr:sr,
     title:title,
     des:des
   }
   settodos([...todos,tod])
}

  const onDelete=(todo)=>{
    console.log('im onDelete')
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
}
  const[todos,settodos]=useState([
    {
      sr:1,
      title:"Go to market",
      des:"You need to go"
    },
    {
      sr:2,
      title:"Go to mall",
      des:"You need to go"
    },
    {
      sr:3,
      title:"Go to ghat",
      des:"You need to go"
    }
  ])
  return (
    <>
    <Router>
    <Header title='Todo List' />
    <Addtodo addTodo={addTodo}/>
    <switch>
      <Route exact path="/">
      <Todos todos={todos} onDelete={onDelete}/>
      </Route>
      <Route exact path="/about">
      <About/>
      </Route>
    </switch>
    </Router>
    </>
  );
}

export default App;
