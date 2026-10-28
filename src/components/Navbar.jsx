import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    color: isActive ? '#ffffff' : '#cbd5e1',
    backgroundColor: isActive ? '#3b82f6' : 'transparent',
    transition: 'background-color 0.2s, color 0.2s',
    display: 'inline-block'
  });

  return (
    <nav
      style={{
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #334155',
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}
    >
      <Link
        to="/"
        style={{
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>⚡ Assignment III</span>
        <span style={{ fontSize: '12px', fontWeight: '400', color: '#94a3b8' }}>
          (React Router)
        </span>
      </Link>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <NavLink to="/" end style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/assignment-static" style={navLinkStyle}>
          Assignment I (/assignment-static)
        </NavLink>
        <NavLink to="/assignment-show-my-name" style={navLinkStyle}>
          Assignment II (/assignment-show-my-name)
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

