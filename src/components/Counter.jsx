import { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(1)

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
