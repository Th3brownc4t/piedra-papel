import React from 'react'
import { useState } from 'react'

function Pantalla() {

    let [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
    }
    function disminuir() {
        setContador(contador - 1)
        limite()
    }
    function limite() {
        if (contador <= 0) {
            setContador(0)
        }
    }
    return (
        <div>
            <div>Pantalla</div>
            <h1>{contador}</h1>
            <button onClick={incrementar}>incrementar</button>
            <button onClick={disminuir}>disminuir</button>
        </div>
    )
}

export default Pantalla