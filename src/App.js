import './App.css';
import React, {Component, useState} from 'react';

// відмалювати список карточок базуючись на якомусь створеному вами масиві 
// створити окрему кнопку, 	яка буде видаляти поточний перший елемент 
// (або останній)  якщо у нас масив з 3 елементів і ми 	клікнули на кнопку
//  3 рази, то на екрані жодна карточка не має відмалюватись  (кнопки повернення 
// 	до початкового стану не треба)
// 2 - те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети,
// як на початку)
// Плюс я додав кнопку зміни напрамку

let posters =[
  {id:1, img:'img/213px-Looper_xlg.jpg', name:'Петля времени', year:2012},
  {id:2, img:'img/225px-Die_Hard.gif', name:'Крепкий орешек', year:1988},
  {id:3, img:'img/Девять_ярдов_(постер).jpg', name:'Девять ярдов', year:2000},
  {id:4, img:"img/216px-Armageddon-poster.jpg", name:'Армагеддон', year:1998},
  ]

const Poster = ({poster}) => (
  <div className='poster-card'>
    <h3>{poster.name}.</h3>
    <p>{poster.year} год.</p>
    <img src={poster.img} alt={poster.name}></img>
  </div>
)

function App() {
  
  // У стейті зберігаємо весь масив, та змінну напрямку видалення
  const [state,setState] = useState({
    p:[...posters],
    direction:true
    //true с конца
  })
  const clickReset= ()=>{
    // заганяємо у стейт масив заново
    setState({
        ...state,
        p:[...posters]
      })
    }
    const clickChangeDirection = () =>{
      setState({
        ...state,
        direction:!state.direction
      })
    }
    
    const clickHandler = ()=>{
      let newArr=[];
      if (state.direction) {
        //true видаляэмо останній елемент
        newArr = state.p.slice(0,state.p.length-1)
      } else{
          //false видаляэмо перший елемент
        newArr = state.p.slice(1,state.p.length)
      }
      setState({
        ...state,
        p:newArr
      })
}

  return (
    <div className="App">
      <button onClick={clickReset}> Reset </button>
      {state.direction && <button onClick={clickChangeDirection}> Напрям з кінця </button>}
      {!state.direction && <button onClick={clickChangeDirection}> Напрям з початку </button>}
      {state.direction && <button onClick={clickHandler}> Видалити останній елемент </button>}
      {!state.direction && <button onClick={clickHandler}> Видалити перший елемент </button>}
      <div className="cards">
        {
          state.p.map( poster=>
            <Poster key={poster.id} poster={poster}/>)
        }
      </div>
    </div>
  );
}

export default App;
