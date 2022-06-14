import './App.css';
import React from 'react'
import { io } from 'socket.io-client'

const App = () => {
  const [message, setMessage] = React.useState('fetching')
  React.useEffect(() => {
    const socket = io('http://localhost:3000')
    socket.on('connect', () => console.log(socket.id))
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 3000)
    })
    socket.on('message', (data) => setMessage(data))
    socket.on('disconnect', () => setMessage('server disconnected'))

  }, [])
  return (
    <div className="App">
      {message}
    </div>
  )
}

export default App;
