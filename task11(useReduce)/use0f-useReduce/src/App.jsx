
import './App.css'
import Counter from './useReduce'

import { Route, Routes, Link } from 'react-router-dom'

function App() {
  

  return (
    <>
        <nav>
          <ul>
            <li><Link to="/">Counter App</Link></li>
            
          </ul>
        </nav>

      <Routes>
        <Route path='/' element={<Counter/>}/>
        
      </Routes>
      


{/* 
      <Counter/>
      <TodoLIist/> */}
  
    </>
  )
}

export default App
