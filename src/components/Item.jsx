import { useNavigate } from 'react-router'

function Item ({ item }) {
  const navigate = useNavigate()

  const handleClick = () => navigate(`/product/${item.id}`)

  return (
    <div className="card bg-base-300 shadow-sm">
      <figure>
        <img
          src={item.thumbnail}
          alt={item.title}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>${item.price}</p>
        <div className="card-actions justify-end">
          <button onClick={handleClick} className="btn btn-block btn-primary">
            Ver mas
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
