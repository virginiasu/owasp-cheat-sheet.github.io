import { Link } from 'react-router-dom';

// Placeholder: Replace with dynamic import of .md files if needed
const cheatSheetItems = [
  { title: 'Authentication', path: '/cheatsheets/authentication' },
  { title: 'Authorization', path: '/cheatsheets/authorization' },
  // Add more items as needed
];

const NavBar = () => (
  <nav>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
      {cheatSheetItems.map((item) => (
        <li key={item.path}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
