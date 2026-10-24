import Item from './Item'

function ItemList ({ items }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5 p-5'>
      {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  )
}

export default ItemList
