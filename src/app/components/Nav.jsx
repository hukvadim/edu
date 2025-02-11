import { Link } from 'react-router-dom';

export default function Nav() {
  return (
	<div>
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/catalog'}>Catalog</Link>
      </li>
    </ul>
  </div>
  )
}
