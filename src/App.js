import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import CardItem from './cardItem/CardItem';
import SearchBar from './searchBar/SearchBar';
import Content from './content/Content';
import Header from './header/header';


function App() {
  const currentItemID = useSelector(state => state.search.currentItemID)
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path={'cardItem/' + currentItemID} element={<CardItem />} index={currentItemID} />
      </Routes>
    </div>
  );
}

export default App;
