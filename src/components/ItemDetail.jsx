function ItemDetail ({ item }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-5'>
      <div>
        <img src={item.thumbnail} alt={item.title} className='bg-white w-full rounded' />
      </div>
      <div className='grid gap-5'>
        <p className='text-xl font-medium'>{item.title}</p>
        <p>{item.description}</p>
        <p className='text-primary font-medium'>$ {item.price}</p>
        <button className='btn btn-primary btn-block'>add to cart</button>
      </div>
    </div>
  )
}

export default ItemDetail
