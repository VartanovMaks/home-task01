import './App.css';
import React, {Component, useState, useEffect} from 'react';

const tabs=[{name:'Posts', url:'https://jsonplaceholder.typicode.com/posts'},
            {name:'Albums', url:'https://jsonplaceholder.typicode.com/albums'},
            {name:'Photos', url:'https://jsonplaceholder.typicode.com/photos'},
            {name:'Todos', url:'https://jsonplaceholder.typicode.com/todos'},
            {name:'Users', url:'https://jsonplaceholder.typicode.com/users'},
            {name:'Comments', url:'https://jsonplaceholder.typicode.com/comments'}
          ]

const Btn = ({title})=>{

  const clickBtn = () =>{

  }

  return(
    <button onClick={clickBtn}>{title}</button>
  )
}


const App = () =>{

return (
  <>
    <div className='btn-div'>
      {tabs.map(tab => <Btn title={tab.name} />)}
    </div>
    <hr />
    <div className='main-div'></div>
  </>
)

}



export default App;
