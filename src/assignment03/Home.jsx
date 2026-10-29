import { Link } from 'react-router-dom';
import Header from '../assignment01/Header';
import Footer from '../assignment01/Footer';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      {/* Simple Header */}
      <Header
        title="Welcome to React Assignments"
        subtitle="Home Page"
      />

      {/* Simple Content Section */}
      <main
        style={{
          flex: 1,
          padding: '40px 20px',
          maxWidth: '800px',
          margin: '30px auto',
          width: '100%',
          backgroundColor: '#f8fafc',
          borderRadius: '10px',
          border: '1px solid #e2e8f0',
          boxSizing: 'border-box',
          textAlign: 'left',
          color: '#334155',
          lineHeight: '1.6'
        }}
      >
        <h2 style={{ color: '#1e293b', marginTop: 0, marginBottom: '14px', fontSize: '24px' }}>
          Home Page Content
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '16px' }}>
          Welcome to the React assignments portal. This web application contains solutions
          for each assignment completed during the React training sessions.
        </p>

        <p style={{ fontSize: '16px', marginBottom: '24px' }}>
          Use the top navigation bar or click the links below to explore any assignment:
        </p>

        {/* Clean, Simple List of Assignment Links */}
        <ul style={{ fontSize: '16px', paddingLeft: '24px', margin: '0 0 24px 0', lineHeight: '2' }}>
          <li>
            <Link to="/assignment-static" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>
              Assignment I
            </Link>
            {' '}— Static component layout (Header, Content, and Footer).
          </li>
          <li>
            <Link to="/assignment-show-my-name" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>
              Assignment II
            </Link>
            {' '}— Dynamic state, InputBox, TextViewer, Save button, and localStorage.
          </li>
          <li>
            <Link to="/assignment-routing" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>
              Assignment III
            </Link>
            {' '}— React Router implementation with URL-based assignment loading.
          </li>
          <li>
            <Link to="/assignment-form" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>
              Assignment IV
            </Link>
            {' '}— Formik and Yup schema validation form with JSON output.
          </li>
        </ul>
      </main>

      {/* Simple Footer */}
      <Footer />
    </div>
  );
}

export default Home;
