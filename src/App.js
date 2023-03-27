import React from 'react'
import SearchBar from './searchBar/SearchBar';
import Content from './content/Content';
import Pagination from './pagination/Pagination';
import './App.css';
import Header from './header/header';


function App() {


  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Content />
      <Pagination />
    </div>
  );
}

export default App;
