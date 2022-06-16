import './App.css'
import { React, useState, useEffect } from 'react'
import './models/shipfactory'



const App = (props) => {
  const [message, setMessage] = useState('fetching')
  const [place, setPlace] = useState('')
  const [guess, setGuess] = useState('')
  const [id, setID] = useState('')
  const [shipName, setShip] = useState('')
  const socket = props.socket

  useEffect(() => {
    socket.on('connect', () => console.log(socket.id))
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 3000)
    })
    socket.on('id', (id) => { setID(id) })
    socket.on('message', (data) => setMessage(data))
    socket.on('place', (data) => setPlace(data))
    socket.on('guess', (data) => setGuess(data))
    socket.on('disconnect', () => setMessage('server disconnected'))
  }, [])

  let playerGrid = generateGrid(socket, id, shipName);
  let oponnentGrid = guessGrid(socket, id);

  return (
    <div className="App">
      <p>Player id: {id}</p>
      <p>{message}</p>
      <p>{place}</p>
      <p>{guess}</p>
      <p>Player board</p>
      {playerGrid}
      <br />
      <button onClick={() => setShip('battleship')}>battleship</button>
      <br />
      <button onClick={() => setShip('cargoship')}>cargoship</button>
      <br />
      <button onClick={() => setShip('cruiser')}>cruiser</button>
      <br />
      <button onClick={() => setShip('hydroplane')}>hydroplane</button>
      <br />
      <button onClick={() => setShip('submarine')}>submarine</button>
      <br />
      <br />
      <br />
      <br />
      <p>Player 2 board</p>
      {oponnentGrid}
    </div>
  )
}

const generateGrid = (socket, id, shipName) => {
  let items = []
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      items.push(<button className="block" onClick={() => placeShip(socket, id, shipName, x, y)} />)
    }
    items.push(<br />)
  }

  return items
}

const guessGrid = (socket, id) => {
  let items = []
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      items.push(<button className="block" onClick={() => guessShip(socket, id, x, y)} />)
    }
    items.push(<br />)
  }

  return items
}

const placeShip = (socket, id, shipName, x, y) => {
  console.log(x + " " + y)
  socket.emit('place', JSON.stringify({ "id": id, "shipName": shipName, "x": x, "y": y }))
}
const guessShip = (socket, id, x, y) => {
  console.log(x + " " + y)
  socket.emit('guess', JSON.stringify({ "id": id, "x": x, "y": y }))
}

export default App;
