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

  const fetchLoad = async()=>{
    const response = await fetch(tabSelected.url);
    const data = await response.json();
    console.log(data)
    setTabList(data)
    // console.log(tabList)
  }

  // Mount & Unmount
  useEffect( ()=>{
    fetchLoad();
    return ()=> setTabList(null)
  },[])

  // Update
  useEffect( ()=>{
    fetchLoad();
  },[tabSelected])
  
  const clickBtn = ({tab}) =>{
    let newTab = JSON.parse(JSON.stringify(tab))
    console.log(newTab)
    setTabSelected(newTab)
  }

  return (
    <>
      <div className='btn-div'>
        {tabs.map(tab => <button onClick={()=> clickBtn({tab})}id={tab.id} key={tab.name}>{tab.name}</button>)}
      </div>
      <hr />
      <div className='main-div'>
        <ul>
        {tabList.map(item => <li key={item.id}>{tabSelected.name} {item.length} : {item.id}</li>)}
        </ul>
      </div>
    </>
  )

}

export default App;
