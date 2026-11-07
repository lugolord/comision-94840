import { NavLink } from 'react-router'

function CategoriesBar ({ categories }) {
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-1" className="btn drawer-button">categories</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {categories.map(category => (
            <li key={category}>
              <NavLink to={`/category/${category}`}>
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoriesBar
