import React from 'react'
import TodoApp from './domain/todo'
import StateCitySelector from './domain/state_city_selector'
import PostSelector from './domain/post_selector'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import './style.css'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      `  <Route path= '/' element = {<Home/>}/>
         <Route path= '/todo' element = {<TodoApp/>}/>
         <Route path= '/post-selector' element = {<PostSelector/>}/>
         <Route path= '/state-city-selector' element = {<StateCitySelector/>}/>
      </Routes>
    </div>
  ) 
}

export default App