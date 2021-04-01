import './App.css';
import React, {Component, useState, useEffect} from 'react';

const Tabs = ({tabs, selectedTab}) =>{

  return(
    <div style={{
      // displayFlex вмнесто display-flex
      //flex:1
    }}>
      {tabs.map(tab=> 
        <button style={{ height: '50px', background:selectedTab === tab.title ? 'green':'lightgrey'}} 
                onClick={tab.clickHandler}>{tab.title}</button>)
      }
    </div>
  )
}

const PostList = ({list})=>{
  return(
    <>
      {list.map( post =>(
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
      ))}
    </>
  )
}
const CommentList = ({list})=>{
  return(
    <>
      {list.map( comment =>(
          <div>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
      ))}
    </>
  )
}
const AlbumList = ({list})=>{
  return(
    <>
      {list.map( album =>(
          <div>
            <h3>{album.title}</h3>
          </div>
      ))}
    </>
  )
}
const PhotoList = ({list})=>{
  return(
    <>
      {list.map( photo =>(
          <div>
            <h3>{photo.title}</h3>
            <p>{photo.url}</p>
          </div>
      ))}
    </>
  )
}
const TodoList = ({list})=>{
  return(
    <>
      {list.map( todo =>(
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.completed.toString()}</p>
          </div>
      ))}
    </>
  )
}
const UserList = ({list})=>{
  return(
    <>
      {list.map( user =>(
          <div>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
          </div>
      ))}
    </>
  )
}


const urlBuilder = (resourse) => `https://jsonplaceholder.typicode.com/${resourse}`
const POSTS ='posts'   
const COMMENTS ='comments'  
const ALBUMS ='albums'  
const PHOTOS ='photos'  
const TODOS ='todos'  
const USERS = 'users' 

// const posts = 'posts1'
// const Components = {
//   [posts]:1,
// }

const Components = {
  [POSTS]:PostList,
  [COMMENTS]:CommentList,
  [ALBUMS]:AlbumList,
  [PHOTOS]:PhotoList,
  [TODOS]:TodoList,
  [USERS]:UserList,
}

function App() {
  const onTabChangeHandler = (tab)=>{
    if (tab !== selectedTab){
      setSelectedTab(tab);
      setList([])
    }
  }

  const tabs = [
    {title:POSTS, clickHandler:()=>onTabChangeHandler(POSTS)},
    {title:COMMENTS, clickHandler:()=>onTabChangeHandler(COMMENTS)},
    {title:ALBUMS, clickHandler:()=>onTabChangeHandler(ALBUMS)},
    {title:PHOTOS, clickHandler:()=>onTabChangeHandler(PHOTOS)},
    {title:TODOS, clickHandler:()=>onTabChangeHandler(TODOS)},
    {title:USERS, clickHandler:()=>onTabChangeHandler(USERS)},
  ]
  // const tabs = [
  //   {title:'posts', clickHandler:()=>setSelectedTab('posts')},
  //   {title:'comments', clickHandler:()=>setSelectedTab('comments')},
  //   {title:'albums', clickHandler:()=>setSelectedTab('albums')},
  //   {title:'photos', clickHandler:()=>setSelectedTab('photos')},
  //   {title:'todos', clickHandler:()=>setSelectedTab('todos')},
  //   {title:'users', clickHandler:()=>setSelectedTab('users')},
  // ]
  const [selectedTab, setSelectedTab] = useState(tabs[0].title)
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async ()=>{
    setIsLoading(true)
    const response = await fetch(urlBuilder(selectedTab));
    const data = await response.json();
    setList(data)
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[selectedTab])
  const ComponentToRender = Components[selectedTab]
  return (
      <div className='App'>
         <Tabs tabs={tabs} selectedTab={selectedTab} />
         {isLoading ? <h1> LOADING DATA...</h1> :  (
           <ComponentToRender list={list}/>
          //  <>
          //   {selectedTab === POSTS && <PostList posts={list} />}
          //   {selectedTab === COMMENTS && <CommentList comments={list} />}
          //   {selectedTab === ALBUMS && <AlbumList albums={list} />}
          //   {selectedTab === PHOTOS && <PhotoList photos={list} />}
          //   {selectedTab === TODOS && <TodoList todos={list} />}
          //   {selectedTab === USERS && <UserList users={list} />}
          //   </>
         )}
      </div>
  )

}

export default App;
