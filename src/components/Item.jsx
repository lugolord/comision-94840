function Item ({ item }) {
  return (
    <div className="card bg-base-300 shadow-sm">
      <figure>
        <img
          src={item.image}
          alt={item.name}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>Aca va la descripcion de este producto</p>
        <div className="card-actions justify-end">
          <button className="btn btn-block btn-primary">Ver mas</button>
        </div>
      </div>
    </div>
  )
}

export default Item
