import './App.css';
import React, {Component, useState, useEffect} from 'react';

const tabs=[{id:0,name:'Posts', url:'https://jsonplaceholder.typicode.com/posts'},
            {id:1,name:'Photos', url:'https://jsonplaceholder.typicode.com/photos'},
            {id:2,name:'Albums', url:'https://jsonplaceholder.typicode.com/albums'},
            {id:3,name:'Todos', url:'https://jsonplaceholder.typicode.com/todos'},
            {id:4,name:'Users', url:'https://jsonplaceholder.typicode.com/users'},
            {id:5,name:'Comments', url:'https://jsonplaceholder.typicode.com/comments'}
          ]

const App = () =>{
 
 const [tabList, setTabList] = useState([])
 const [tabSelected, setTabSelected] = useState(tabs[0])

 const BTNComponent = ({tab}) =>{
   return (
    <>
      <button onClick={()=> clickBtn({tab})} id={tab.id} key={tab.name}>{tab.name}</button>
    </>
   )
}

const LIComponent = ({objData}) =>{
  const propArr = [];
  // Масив стічок, які складаються з проперті та її 
  // На жаль я не знайшов свій шаблон рекурсивної функції, тому роблю вже "щоб було"
  for (let prop in objData) {
    if (typeof objData[prop] !== 'object') {
        propArr.push(`${prop} : ${objData[prop]}`);
    } else {
      let value = JSON.stringify( objData[prop]);
      propArr.push(`${prop} : ${value}`);
    }
  }  
    return (
      <>
        <li> 
          {/* Кожна пропертя у своєму діві */}
          {propArr.map( (prop) => <div>{prop}</div>)}
        </li>
      </>
   )
}
  const fetchLoad = async()=>{
    const response = await fetch(tabSelected.url);
    const data = await response.json();
    setTabList(data)
  }

  // Mount & Unmount
  useEffect( ()=>{
    fetchLoad();
    return ()=> setTabList(null)
  },[])

  // Update
  useEffect( ()=>{
    fetchLoad()
  },[tabSelected])
  
  const clickBtn = ({tab}) =>{
    let newTab = JSON.parse(JSON.stringify(tab))
    setTabSelected(newTab)
  }
  
  
  return (
    <>
      <div className='btn-div'>
        {tabs.map(tab => <BTNComponent tab={tab} />)}
      </div>
      <hr />
      <div className='main-div'>
        <ul>
        {tabList.map(item => <LIComponent objData = {item} /> )}
        </ul>
      </div>
    </>
  )

}

export default App;
