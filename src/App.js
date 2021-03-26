import './App.css';
import React, {Component, useState} from 'react';

// відмалювати список карточок базуючись на якомусь створеному вами масиві 
// створити окрему кнопку, 	яка буде видаляти поточний перший елемент 
// (або останній)  якщо у нас масив з 3 елементів і ми 	клікнули на кнопку
//  3 рази, то на екрані жодна карточка не має відмалюватись  (кнопки повернення 
// 	до початкового стану не треба)

let posters =[
  {id:1, show:true, img:'img/213px-Looper_xlg.jpg', name:'Петля времени', year:2012},
  {id:2, show:true, img:'img/225px-Die_Hard.gif', name:'Крепкий орешек', year:1988},
  {id:3, show:true, img:'img/Девять_ярдов_(постер).jpg', name:'Девять ярдов', year:2000},
  {id:4, show:true, img:"img/216px-Armageddon-poster.jpg", name:'Армагеддон', year:1998},
  ]

const Poster = ({poster}) => (
  <div className='poster-card'>
    <h3>{poster.name}.</h3>
    <p>{poster.year} год.</p>
    <img src={poster.img} alt={poster.name}></img>

  </div>


)

function App() {

  //posters.forEach(item=>item.show=true);
  
  // const [cards,setState] = useState(posters)
  // let l = posters.length
  // const [counter,setCounter] = useState(l)
  let l = posters.length
  const [state,setState] = useState({
    counter:l,
    p:[...posters]
  })
  

  const clickHandler = ()=>{
    // уменьшаем счетчик нажатий на кнопку
    // соответствующему элементу массива присваиваем св-во show - false
    
    if(state.counter > 0) {
      let cnt=state.counter-1;
      let newArr = [...state.p]
      newArr[cnt].show=false;
      setState({
        //...state,
        counter:cnt,
        p:newArr
      })
      
      console.log(state.counter)
      console.log(state.p)
    }
}


  return (



    <div className="App">
      <button onClick={clickHandler}> Убрать последний элемент </button>
      <div className="cards">
        {
          state.p.map( poster=>( 
            //{state.isHeaderVisible && <Header counter = {state.counter}/>}
            poster.show && <Poster key={poster.id} poster={poster}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
