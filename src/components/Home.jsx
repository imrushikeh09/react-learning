import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header
        title="Assignment 3: React Router Implementation"
        subtitle="Dynamic client-side routing between assignments"
      />

      <main
        style={{
          flex: 1,
          padding: '40px 20px',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'left'
        }}
      >
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px'
          }}
        >
          <h2 style={{ margin: '0 0 12px 0', color: '#1e293b' }}>
            Routing Overview
          </h2>
          <p style={{ margin: '0 0 16px 0', color: '#475569', lineHeight: '1.6' }}>
            This project uses <strong>React Router</strong> (<code>react-router-dom</code>) to render different
            assignments based on the browser URL path. You can click on any card below, use the top navigation
            bar, or type the URL directly into your browser address bar.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginTop: '20px'
            }}
          >
            {/* Assignment 1 Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    backgroundColor: '#dbeafe',
                    color: '#1d4ed8',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}
                >
                  Assignment I
                </span>
                <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>
                  Static Component Layout
                </h3>
                <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>
                  Modular Header, Content, and Footer components rendered in a clean static layout.
                </p>
                <div style={{ marginBottom: '16px' }}>
                  <code style={{ fontSize: '12px', color: '#2563eb' }}>
                    /assignment-static
                  </code>
                </div>
              </div>

              <Link
                to="/assignment-static"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  padding: '10px 18px',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Open Assignment I &rarr;
              </Link>
            </div>

            {/* Assignment 2 Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    backgroundColor: '#e0e7ff',
                    color: '#4338ca',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}
                >
                  Assignment II
                </span>
                <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>
                  Show My Name (Dynamic State)
                </h3>
                <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>
                  Interactive live two-way data binding with InputBox, TextViewer, Clear button, and localStorage.
                </p>
                <div style={{ marginBottom: '16px' }}>
                  <code style={{ fontSize: '12px', color: '#4338ca' }}>
                    /assignment-show-my-name
                  </code>
                </div>
              </div>

              <Link
                to="/assignment-show-my-name"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  padding: '10px 18px',
                  backgroundColor: '#4f46e5',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Open Assignment II &rarr;
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

