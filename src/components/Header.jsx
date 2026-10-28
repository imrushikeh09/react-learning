function Header({
  title = "Assignment 1: My React Application",
  subtitle = "Header Component"
} = {}) {
    return (
        <header style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}

export default Header;
