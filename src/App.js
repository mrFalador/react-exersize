import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'javascript', body: 'description'},
    {id: 2, title: 'javascript 2', body: 'description'},
    {id: 3, title: 'javascript 3', body: 'description'},
    {id: 4, title: 'javascript 4', body: 'description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          defaultValue="Сортировка"
          option = {[
            {value: 'title', name: 'По заголовку'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Посты про JS"/>
        : <h1 style = {{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
