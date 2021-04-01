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

const PostList = ({posts})=>{
  return(
    <>
      {posts.map( post =>(
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
      ))}
    </>
  )
}
const CommentList = ({comments})=>{
  return(
    <>
      {comments.map( comment =>(
          <div>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
      ))}
    </>
  )
}
const AlbumList = ({albums})=>{
  return(
    <>
      {albums.map( album =>(
          <div>
            <h3>{album.title}</h3>
          </div>
      ))}
    </>
  )
}
const PhotoList = ({photos})=>{
  return(
    <>
      {photos.map( photo =>(
          <div>
            <h3>{photo.title}</h3>
            <p>{photo.url}</p>
          </div>
      ))}
    </>
  )
}
const TodoList = ({todos})=>{
  return(
    <>
      {todos.map( todo =>(
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.completed.toString()}</p>
          </div>
      ))}
    </>
  )
}
const UserList = ({users})=>{
  return(
    <>
      {users.map( user =>(
          <div>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
          </div>
      ))}
    </>
  )
}


const urlBuilder = (resourse) => `https://jsonplaceholder.typicode.com/${resourse}`

function App() {
  const onTabChangeHandler = (tab)=>{
    if (tab !== selectedTab){
      setSelectedTab(tab);
      setList([])
    }
  }

  const tabs = [
    {title:'posts', clickHandler:()=>onTabChangeHandler('posts')},
    {title:'comments', clickHandler:()=>onTabChangeHandler('comments')},
    {title:'albums', clickHandler:()=>onTabChangeHandler('albums')},
    {title:'photos', clickHandler:()=>onTabChangeHandler('photos')},
    {title:'todos', clickHandler:()=>onTabChangeHandler('todos')},
    {title:'users', clickHandler:()=>onTabChangeHandler('users')},
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

  return (
      <div className='App'>
         <Tabs tabs={tabs} selectedTab={selectedTab} />
         {isLoading ? <h1> LOADING DATA...</h1> :  (
           <>
            {selectedTab === 'posts' && <PostList posts={list} />}
            {selectedTab === 'comments' && <CommentList comments={list} />}
            {selectedTab === 'albums' && <AlbumList albums={list} />}
            {selectedTab === 'photos' && <PhotoList photos={list} />}
            {selectedTab === 'todos' && <TodoList todos={list} />}
            {selectedTab === 'users' && <UserList users={list} />}
            </>
         )}
      </div>
  )

}

export default App;
