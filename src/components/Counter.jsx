import { useState, useEffect } from 'react'

function Counter () {
  const [count, setCount] = useState(1)

  useEffect(() => { // efecto
    console.log('cualquier cosa')

    return () => { // funcion de limpieza o cleanup function
      console.log('se desmonto')
    }
  }, [count]) // array de dependencias

  // [] -> el efecto solo se ejecuta 1 vez, en el montaje
  // [a, b] -> el efecto se ejecuta en el montaje y cuando varie "a" o "b"
  // Desmontaje -> necesito una funcion de limpieza

  const handleSumar = () => {
    setCount(count + 1)
  }

  const handleRestar = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(1)
  }

  return (
    <div className='border w-fit p-5'>
      <p className='text-center text-2xl mb-3'>{count}</p>
      <div className='flex gap-2'>
        <button 
          className='bg-green-400 px-3 py-2 rounded'
          onClick={handleSumar}
        >
          sumar
        </button>
        <button 
          className='bg-red-400 px-3 py-2 rounded'
          onClick={handleRestar}
        >
          restar
        </button>
        <button 
          className='bg-black text-white px-3 py-2 rounded'
          onClick={handleReset}
        >
          reiniciar
        </button>
      </div>
    </div>
  )
}

export default Counter
