
import './App.css'
import Counter from './useReduce'
import TodoLIist from './todoList'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  

  return (
    <>
        <nav>
          <ul>
            <li><Link to="/">Counter App</Link></li>
            <li><Link to="/Todo">To-Do-List</Link></li>
          </ul>
        </nav>

      <Routes>
        <Route path='/' element={<Counter/>}/>
         <Route path='/Todo' element={<TodoLIist/>}/> 
      </Routes>
  
    </>
  )
}

export default App
