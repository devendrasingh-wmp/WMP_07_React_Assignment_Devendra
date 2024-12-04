import React from 'react'
import TodoApp from './domain/todo'
import StateCitySelector from './domain/state_city_selector'
import PostSelector from './domain/post_selector'


function App() {
  return (
    <div>
      <TodoApp/>
      <StateCitySelector/>
      <PostSelector/>
    </div>
  )
}

export default App