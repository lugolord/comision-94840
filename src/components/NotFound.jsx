import { Link } from 'react-router'

function NotFound () {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <h2 className='text-6xl'>404. Aca no hay nada.</h2>
      <Link className='btn btn-primary mt-10' to='/'>volver al inicio</Link>
    </div>
  )
}

export default NotFound
