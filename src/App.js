import './App.css';
import React, {Component, useState} from 'react';

// 3 задача з зірочкою) кожна карточка з завдання вище має мати кнопку, 
// по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, щоб 
// вернути все назад (ця кнопка одна дня всіх карточок, клікнули 
// по ній і всі каркти вернулись назазд) (згадування функції фільтр в лекції 
// було не просто так)

let posters =[
  {id:1, img:'img/213px-Looper_xlg.jpg', name:'Петля времени', year:2012},
  {id:2, img:'img/225px-Die_Hard.gif', name:'Крепкий орешек', year:1988},
  {id:3, img:'img/Девять_ярдов_(постер).jpg', name:'Девять ярдов', year:2000},
  {id:4, img:"img/216px-Armageddon-poster.jpg", name:'Армагеддон', year:1998},
  ]

function App() {

const PosterButton = ({d}) => (
    
    <button onClick={clickPosterButton} id={d}> Видалити постер </button>
)
const Poster = ({poster}) => (
  <div className='poster-card'>
    <h3>{poster.name}.</h3>
    <p>{poster.year} год.</p>
    <img src={poster.img} alt={poster.name} id={poster.id}></img>
    <PosterButton d={poster.id}/>
  </div>
)
  const clickPosterButton = (e)=>{
  console.log(e);
}
  // У стейті зберігаємо весь масив, та змінну напрямку видалення
  const [state,setState] = useState({
    p:[...posters],
  })
  const clickReset= ()=>{
    // заганяємо у стейт масив заново
    setState({
        ...state,
        p:[...posters]
      })
    }
  return (
    <div className="App">
      <button onClick={clickReset}> Reset </button>
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
