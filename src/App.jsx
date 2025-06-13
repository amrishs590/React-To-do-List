import { useState } from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To-do List Manager</h1>
      <TodoList></TodoList>
    </>
  )
}

export default App
