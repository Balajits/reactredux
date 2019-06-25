import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AllPost from './AllPost';
import PostForm from './PostForm';

class App extends React.Component {
  render() {
    return (
      <div>
       
        <PostForm />
        <AllPost />
      </div>

    );
  }
}

export default App;
