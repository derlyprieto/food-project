import React, { useEffect, useState } from 'react'

const PedidoPizza = () => {
    const [item, setItem] = useState('')
  

    useEffect(() => {
       console.log('Se montó el componente de función')
       setTimeout(() => {
            setItem('Pizza')
       }, 2000)
       return () => {
           console.log('Se desmontó el componente de función')
       }
    }, [])


    useEffect(() => {
      console.log('Se actualizó count dentro del componente de función')
  }, [item])
    
    console.log('Se renderizó el componente de función')

  return (
    <div>
        <h1>Su Pedido:</h1>
        <h3>{item}</h3>
        <button onClick={()=> setItem('')}>Cancelar pedido</button>
    </div>
  )
}

export default PedidoPizza