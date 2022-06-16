import './App.css'
import { React, useState, useEffect, useRef } from 'react'

const App = (props) => {
  const [message, setMessage] = useState('fetching')
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [guess, setGuess] = useState('')
  const [id, setID] = useState('')
  const [shipName, setShip] = useState('')
  const socket = props.socket

  let playerGrid = generateGrid(socket, id, shipName, setX, setY);
  let oponnentGrid = guessGrid(socket, id);

  useEffect(() => {
    socket.on('connect', () => console.log(socket.id))
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 3000)
    })
    socket.on('id', (id) => { setID(id) })
    socket.on('message', (data) => setMessage(data))
    socket.on('guess', (data) => setGuess(data))
    socket.on('disconnect', () => setMessage('server disconnected'))
  }, [])

  socket.on('place', (allowed) => {
    if (allowed) {
      console.log('allowed')
      console.log(x * 10 + y)
      if (x && y) {
        if (shipName === 'battleship') {
          document.getElementById(x * 10 + y).style.backgroundColor = "red"
          document.getElementById(x * 10 + (y + 1)).style.backgroundColor = "red"
          document.getElementById(x * 10 + (y + 2)).style.backgroundColor = "red"
          document.getElementById(x * 10 + (y + 3)).style.backgroundColor = "red"
        }
        else if (shipName === 'cargoship') {
          document.getElementById(x * 10 + y).style.backgroundColor = "yellow"
          document.getElementById(x * 10 + (y + 1)).style.backgroundColor = "yellow"
          document.getElementById(x * 10 + (x + 2)).style.backgroundColor = "yellow"
          document.getElementById(x * 10 + (x + 3)).style.backgroundColor = "yellow"
          document.getElementById(x * 10 + (x + 4)).style.backgroundColor = "yellow"
        }
        else if (shipName === 'cruiser') {
          document.getElementById(x * 10 + y).style.backgroundColor = "orange"
          document.getElementById(x * 10 + (y + 1)).style.backgroundColor = "orange"
          document.getElementById(x * 10 + (y + 2)).style.backgroundColor = "orange"
          document.getElementById(x * 10 + (y + 3)).style.backgroundColor = "orange"
          document.getElementById(x * 10 + (y + 4)).style.backgroundColor = "orange"
          document.getElementById(x * 10 + (y + 5)).style.backgroundColor = "orange"
        }
        else if (shipName === 'hydroplane') {
          document.getElementById(x * 10 + y).style.backgroundColor = "blue"
          document.getElementById((x - 1) * 10 + (y + 1)).style.backgroundColor = "blue"
          document.getElementById(x * 10 + (y + 2)).style.backgroundColor = "blue"
        }
        else if (shipName === 'submarine') {
          document.getElementById(x * 10 + y).style.backgroundColor = "green"
          document.getElementById(x * 10 + (y + 1)).style.backgroundColor = "green"
          document.getElementById(x * 10 + (y + 2)).style.backgroundColor = "green"
          document.getElementById(x * 10 + (y + 3)).style.backgroundColor = "green"
        }
      }
      setX('')
      setY('')
    } else {

      console.log('not allowed')
    }
  })

  return (
    <div className="App">
      <p>Player id: {id}</p>
      <p>{message}</p>
      <p>{guess}</p>
      <p>Player board</p>
      <div className='grid'>
        {playerGrid}</div>
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

      <div className='grid'>{oponnentGrid}</div>
    </div >
  )
}

const generateGrid = (socket, id, shipName, setX, setY) => {
  let items = []
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      items.push(<button id={x * 10 + y} key={x * 10 + y} className="grid-container" onClick={() => {
        setX(x)
        setY(y)
        placeShip(socket, id, shipName, x, y)
      }} />)
    }
  }

  return items
}

const guessGrid = (socket, id) => {
  let items = []
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      items.push(<button id={x * 10 + y} key={x * 10 + y} className="grid-container" onClick={() => guessShip(socket, id, x, y)} />)
    }
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
