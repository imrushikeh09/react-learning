function Header({
  title = "Assignment 1: My React Application",
  subtitle = "Header Component"
} = {}) {
  return (
    <header
      style={{
        backgroundColor: '#2563eb',
        color: '#ffffff',
        padding: '24px 20px',
        textAlign: 'center'
      }}
    >
      <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '700' }}>
        {title}
      </h1>
      <p style={{ margin: 0, fontSize: '15px', opacity: 0.9 }}>
        {subtitle}
      </p>
    </header>
  );
}

export default Header;

