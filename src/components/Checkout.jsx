import { useNavigate } from 'react-router'

function Checkout () {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    const ok = false

    e.preventDefault()

    if (ok) {
      navigate('/')
    } else {
      alert('Ocurrio un error al momento de finalizar tu compra')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Page title</legend>
          <input type="text" className="input" placeholder="My awesome page" />
          <p className="label">You can edit page title later on from settings</p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Page title</legend>
          <input type="text" className="input" placeholder="My awesome page" />
          <p className="label">You can edit page title later on from settings</p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Page title</legend>
          <input type="text" className="input" placeholder="My awesome page" />
          <p className="label">You can edit page title later on from settings</p>
        </fieldset>
        <button className='btn'>finalizar compra</button>
      </form>
    </div>
  )
}

export default Checkout
