import { Link, useLocation } from 'react-router-dom';
import Header from '../assignment01/Header';
import Footer from '../assignment01/Footer';

function Assignment03() {
  const location = useLocation();

  const routes = [
    { path: '/assignment-static', target: 'Assignment I', desc: 'Static Component Layout (Header, Content, Footer)' },
    { path: '/assignment-show-my-name', target: 'Assignment II', desc: 'Dynamic InputBox, TextViewer, Save & LocalStorage' },
    { path: '/assignment-routing', target: 'Assignment III', desc: 'React Router configuration and routing hub' },
    { path: '/assignment-form', target: 'Assignment IV', desc: 'Formik & Yup Form (First Name, Last Name, Role, JSON)' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header
        title="Assignment 3: React Router Implementation"
        subtitle="Dynamic client-side routing based on browser URL with react-router-dom"
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
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.06)',
            marginBottom: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ margin: 0, color: '#0f172a', fontSize: '20px' }}>
              Active Route Inspector
            </h3>
            <span
              style={{
                backgroundColor: '#fef3c7',
                color: '#92400e',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600'
              }}
            >
              Current Path: <code>{location.pathname}</code>
            </span>
          </div>

          <p style={{ margin: '0 0 20px 0', color: '#475569', lineHeight: '1.6' }}>
            Assignment III configures client-side routing so entering different URLs in the browser
            automatically loads the corresponding assignment without a full page refresh:
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '10px 12px', color: '#334155' }}>URL Path</th>
                  <th style={{ padding: '10px 12px', color: '#334155' }}>Target Component</th>
                  <th style={{ padding: '10px 12px', color: '#334155' }}>Description</th>
                  <th style={{ padding: '10px 12px', color: '#334155' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '10px 12px' }}>
                      <code style={{ color: '#2563eb', fontWeight: '600' }}>{r.path}</code>
                    </td>
                    <td style={{ padding: '10px 12px', fontWeight: '500', color: '#0f172a' }}>
                      {r.target}
                    </td>
                    <td style={{ padding: '10px 12px', color: '#64748b' }}>
                      {r.desc}
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <Link
                        to={r.path}
                        style={{
                          color: '#2563eb',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '13px'
                        }}
                      >
                        Visit &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Assignment03;

