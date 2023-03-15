import React from 'react'
import { useState } from 'react'

function Juego() {

    let opciones = ["piedra", "papel", "tijera"]

    const [human, setHuman] = useState()
    const [robot, setRobot] = useState()
    
    function juegoMaquina() {
        let ramdomOpcMaquina = Math.round(Math.random()*(opciones.length-1))
        setRobot(opciones[ramdomOpcMaquina])
    }
    
    
    function ganador() {
        if (human === "piedra" && robot === "tijera") {
            alert("gano humano")
        } else if (human === "tijera" && robot === "papel") {
            alert("gano humano")
        } else if (human === "papel" && robot === "piedra") {
            alert("gano humano")
        } else if (human === robot) {
            alert("empate")
        } else {
            alert("gano maquina")
        }
    }
    function juegoHumano(e) {
        setHuman(e.target.innerText)
        juegoMaquina()
    }
    
    return (
    <div>
        <div>
            <h3>Human</h3>
            <p>{human}</p>
        </div>
        <div>
            <h3>Robot</h3>
            <p>{robot}</p>
        </div>
        <div>
            <button onClick={juegoHumano}>piedra</button>
            <button onClick={juegoHumano}>papel</button>
            <button onClick={juegoHumano}>tijera</button>
        </div>
            <button onClick={ganador}>Ganador</button>
    </div>
  )
}

export default Juego