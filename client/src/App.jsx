
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

import { SocketProvider } from './providers/Socket.jsx'
import Room from './pages/Room.jsx'

import { PeerProvider } from './providers/Peer.jsx'

function App() {
  return(
    <SocketProvider>
      <PeerProvider>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/room/:roomId' element={<Room/>}></Route>
        </Routes>
      </PeerProvider>
    </SocketProvider>
  )
}

export default App
