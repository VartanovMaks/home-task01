import './App.css';
import React, {Component, useState} from 'react';

const Btn = (title)=>{

  return(
    <button>{title}</button>
  )
}




const App = () =>{

return (
  <>
    <Btn title='Posts' />
    <Btn title='Comments' />
    <Btn title='Albums' />
    <Btn title='Photos' />
    <Btn title='Todos' />
    <Btn title='Users' />
  </>

)

}



export default App;
