import React, {useState} from 'react';
import {Route, Routes}  from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Community from './pages/Community'
import About from './pages/About'
import BoardList from './pages/BoardList'
import BoardWrite from './pages/BoardWrite'
import BoardView from './pages/BoardView'
import BoardModify from './pages/BoardModify'
import Product from './pages/Product'
import Login from './pages/Login'
import Join from './pages/Join'
import Store from './pages/Store'
import { AirContext } from './context/AirContext'

const App = () => {

  const [active, setActive] = useState(0)
  const [loging, setLoging] = useState(sessionStorage.getItem('id'))

  return (
    <AirContext.Provider value={{active, setActive, loging, setLoging}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/board/list/:boardName" element={<BoardList />} />
          <Route path="/board/write/:boardName" element={<BoardWrite />} />
          <Route path="/board/view" element={<BoardView />} />
          <Route path="/board/modify" element={<BoardModify />} />
          <Route path="/community" element={<Community />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </AirContext.Provider>
  );
};

export default App;