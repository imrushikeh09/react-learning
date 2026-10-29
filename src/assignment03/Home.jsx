import { Link } from 'react-router-dom';
import Header from '../assignment01/Header';
import Footer from '../assignment01/Footer';

function Home() {
  const assignments = [
    {
      id: '01',
      title: 'Assignment I: Static Layout',
      path: '/assignment-static',
      folder: 'assignment01',
      badge: 'Components & JSX',
      badgeBg: '#dbeafe',
      badgeColor: '#1d4ed8',
      btnBg: '#2563eb',
      description:
        'Modular architecture containing Header, Content, and Footer components combined into a single static page layout.'
    },
    {
      id: '02',
      title: 'Assignment II: Show My Name',
      path: '/assignment-show-my-name',
      folder: 'assignment02',
      badge: 'State, Props & Storage',
      badgeBg: '#e0e7ff',
      badgeColor: '#4338ca',
      btnBg: '#4f46e5',
      description:
        'Interactive two-way state passing between InputBox and TextViewer, Clear button, Save button, and localStorage persistence.'
    },
    {
      id: '03',
      title: 'Assignment III: React Router',
      path: '/assignment-routing',
      folder: 'assignment03',
      badge: 'Routing & Navigation',
      badgeBg: '#fef3c7',
      badgeColor: '#b45309',
      btnBg: '#d97706',
      description:
        'Client-side SPA routing with react-router-dom, route matching based on URL, active navigation links, and 404 handling.'
    },
    {
      id: '04',
      title: 'Assignment IV: Formik & Yup Validation',
      path: '/assignment-form',
      folder: 'assignment04',
      badge: 'Forms & Validation',
      badgeBg: '#d1fae5',
      badgeColor: '#065f46',
      btnBg: '#059669',
      description:
        'Form with First Name, Last Name, and Role dropdown (Owner, User, Admin). Compulsory validations with Yup, and JSON output.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header
        title="React Assignments Course Hub"
        subtitle="Assignments 1 through 4 with modular folder structure and client-side routing"
      />

      <main
        style={{
          flex: 1,
          padding: '40px 20px',
          maxWidth: '900px',
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
            marginBottom: '30px'
          }}
        >
          <h2 style={{ margin: '0 0 10px 0', color: '#0f172a', fontSize: '22px' }}>
            Project Overview & Directory Structure
          </h2>
          <p style={{ margin: '0 0 16px 0', color: '#475569', lineHeight: '1.6' }}>
            All assignments are organized in clean folders (<code>assignment01</code> through <code>assignment04</code>)
            and integrated via <strong>React Router</strong>. You can navigate using the navbar above, the cards below,
            or by typing URLs directly in your browser.
          </p>

          <div
            style={{
              backgroundColor: '#0f172a',
              color: '#38bdf8',
              padding: '16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontFamily: 'ui-monospace, Consolas, Monaco, monospace',
              lineHeight: '1.5',
              overflowX: 'auto'
            }}
          >
            <div>📁 react-assignments/</div>
            <div>&nbsp;&nbsp;├── 📁 src/</div>
            <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── 📁 assignment01/ &nbsp;(Header, Content, Footer, Assignment01)</div>
            <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── 📁 assignment02/ &nbsp;(InputBox, TextViewer, Assignment02)</div>
            <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── 📁 assignment03/ &nbsp;(Navbar, Home, Assignment03, NotFound)</div>
            <div>&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── 📁 assignment04/ &nbsp;(UserForm, validationSchema, Assignment04)</div>
            <div>&nbsp;&nbsp;└── 📄 package.json, vite.config.js, etc.</div>
          </div>
        </div>

        {/* Assignment Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '20px'
          }}
        >
          {assignments.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: item.badgeBg,
                      color: item.badgeColor,
                      fontSize: '12px',
                      fontWeight: '700'
                    }}
                  >
                    {item.badge}
                  </span>
                  <code style={{ fontSize: '12px', color: '#64748b' }}>
                    src/{item.folder}/
                  </code>
                </div>

                <h3 style={{ margin: '0 0 10px 0', color: '#0f172a', fontSize: '18px' }}>
                  {item.title}
                </h3>
                <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>
                  {item.description}
                </p>

                <div style={{ marginBottom: '18px' }}>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>URL Route: </span>
                  <code style={{ fontSize: '13px', color: item.badgeColor, fontWeight: '600' }}>
                    {item.path}
                  </code>
                </div>
              </div>

              <Link
                to={item.path}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '10px 18px',
                  backgroundColor: item.btnBg,
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Open Assignment {item.id} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

