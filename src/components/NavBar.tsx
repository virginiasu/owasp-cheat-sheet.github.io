import { Link } from 'react-router-dom';
import './NavBar.css';
import cheatSheetItems from './cheatSheetItems.json';

const NavBar = () => (
  <nav className="sidebar">
    <h2>Cheat Sheets <a href='/' className='home-link'>Home</a></h2>
    <ul className="nav-list">
      {cheatSheetItems.map((item) => (
        <li key={item.path}>
          <Link to={item.path} className="nav-link">{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
