import { Link } from 'react-router-dom';
import Header from '../assignment01/Header';
import Footer from '../assignment01/Footer';

function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header
        title="404 - Page Not Found"
        subtitle="The requested URL route does not exist"
      />

      <main
        style={{
          flex: 1,
          padding: '60px 20px',
          maxWidth: '600px',
          margin: '0 auto',
          width: '100%',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{ fontSize: '48px', margin: '0 0 16px 0', color: '#ef4444' }}>
          404
        </h2>
        <p style={{ fontSize: '18px', color: '#475569', marginBottom: '24px' }}>
          Oops! The assignment or route you are looking for does not exist.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              padding: '10px 18px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            Home Hub
          </Link>
          <Link
            to="/assignment-static"
            style={{
              padding: '10px 18px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            Assignment I
          </Link>
          <Link
            to="/assignment-show-my-name"
            style={{
              padding: '10px 18px',
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            Assignment II
          </Link>
          <Link
            to="/assignment-form"
            style={{
              padding: '10px 18px',
              backgroundColor: '#059669',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500',
              fontSize: '14px'
            }}
          >
            Assignment IV
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;

