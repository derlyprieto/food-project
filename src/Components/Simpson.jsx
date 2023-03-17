import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Simpson = () => {

const [personaje, setPersonaje] = useState([])

const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"

//useEffect(() => {
 //   fetch(url)
 //   .then(res => res.json())
 //   .then(data => setPersonaje(data))
//}, [])

/*
useEffect(() => {
    const fetchData = async () => {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setPersonaje(data)
    }
    fetchData()
},[])
*/

useEffect(()=>{
    axios(url)
    .then(({data}) => setPersonaje(data))
  },[])

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