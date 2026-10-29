import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    padding: '8px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '600',
    color: isActive ? '#ffffff' : '#cbd5e1',
    backgroundColor: isActive ? '#2563eb' : 'transparent',
    transition: 'background-color 0.2s, color 0.2s',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  });

  return (
    <nav
      style={{
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Link
        to="/"
        style={{
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '17px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>⚡ React Assignments</span>
      </Link>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        <NavLink to="/" end style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/assignment-static" style={navLinkStyle}>
          Assignment I
        </NavLink>
        <NavLink to="/assignment-show-my-name" style={navLinkStyle}>
          Assignment II
        </NavLink>
        <NavLink to="/assignment-routing" style={navLinkStyle}>
          Assignment III
        </NavLink>
        <NavLink to="/assignment-form" style={navLinkStyle}>
          Assignment IV
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

