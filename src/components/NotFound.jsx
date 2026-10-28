import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

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

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              padding: '10px 20px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            Go to Home
          </Link>
          <Link
            to="/assignment-static"
            style={{
              padding: '10px 20px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            Assignment I
          </Link>
          <Link
            to="/assignment-show-my-name"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            Assignment II
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;

