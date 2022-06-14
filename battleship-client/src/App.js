import './App.css';
import { React, useState, useEffect } from 'react'


const App = (props) => {
  const [message, setMessage] = useState('fetching')
  const [id, setID] = useState('')
  const socket = props.socket
  useEffect(() => {
    socket.on('connect', () => console.log(socket.id))
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 3000)
    })
    socket.on('id', (id) => { setID(id) })
    socket.on('message', (data) => setMessage(data))
    socket.on('disconnect', () => setMessage('server disconnected'))

  }, [])
  return (
    <div className="App">
      <p>Player id: {id}</p>
      <p>{message}</p>
      <button onClick={() => placeShip(socket, id)}>
        place ship
      </button>
    </div>
  )
}

const placeShip = (socket, id) => {
  socket.emit('place', JSON.stringify({ "id": id, "shipName": "cruiser", "x": 1, "y": 1 }))
}

export default App;
