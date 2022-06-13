import './App.css';
import { React, useState, useEffect } from 'react'

const App = (props) => {
  const [message, setMessage] = useState('fetching')
  const socket = props.socket;
  useEffect(() => {
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
