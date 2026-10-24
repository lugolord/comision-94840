import { products } from '../products'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = () => new Promise((res, rej) => {
      res(products)
      rej('no se pudo obtener los productos')
    })

    setTimeout(() => {
      getItems()
        .then(res => setItems(res))
    }, 2000)
  }, [])

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer
