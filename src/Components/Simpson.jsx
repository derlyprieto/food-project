import React, { useEffect, useState } from 'react'

const Simpson = () => {

const [personaje, setPersonaje] = useState([])

const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"

useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPersonaje(data))
}, [])

console.log(personaje);

return (
    <div>
        {personaje.map((p, index) => (
            <div key={index}>
                <h3>{p.character}</h3>
                <img src={p.image} alt="" />
            </div>

        ))}
    </div>
  )
}

export default Simpson