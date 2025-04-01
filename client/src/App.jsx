
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

import { SocketProvider } from './providers/Socket.jsx'



function App() {
  return(
    <SocketProvider>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
      </Routes>
    </SocketProvider>
  )
}

export default App
