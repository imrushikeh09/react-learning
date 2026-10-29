import { useState } from 'react';
import Header from '../assignment01/Header';
import Footer from '../assignment01/Footer';
import UserForm from './UserForm';

function Assignment04() {
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
    setCopied(false);
  };

  const handleResetOutput = () => {
    setSubmittedData(null);
    setCopied(false);
  };

  const handleCopyJSON = () => {
    if (submittedData) {
      navigator.clipboard.writeText(JSON.stringify(submittedData, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header
        title="Assignment 4: Forms & Validation"
        subtitle="Formik, Yup Schema Validation, Compulsory Fields & JSON Output"
      />

      <main
        style={{
          flex: 1,
          padding: '40px 20px',
          maxWidth: '720px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'left'
        }}
      >
        {/* Form Component */}
        <UserForm onFormSubmit={handleFormSubmit} onResetOutput={handleResetOutput} />

        {/* JSON Output Section */}
        <div
          style={{
            marginTop: '28px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.06)'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '14px',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 4px 0', color: '#0f172a', fontSize: '18px' }}>
                Form Submission JSON Output
              </h3>
              <p style={{ margin: 0, color: '#64748b', fontSize: '13px' }}>
                Outputs live data after validation passes (also logged to console)
              </p>
            </div>

            {submittedData && (
              <button
                type="button"
                onClick={handleCopyJSON}
                style={{
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: copied ? '#059669' : '#334155',
                  backgroundColor: copied ? '#ecfdf5' : '#f1f5f9',
                  border: `1px solid ${copied ? '#a7f3d0' : '#cbd5e1'}`,
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                {copied ? '✓ Copied JSON' : '📋 Copy JSON'}
              </button>
            )}
          </div>

          {submittedData ? (
            <div>
              <div
                style={{
                  padding: '10px 14px',
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  borderRadius: '6px',
                  color: '#065f46',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '14px'
                }}
              >
                ✓ All validations passed! Form submitted successfully.
              </div>

              {/* JSON code block */}
              <pre
                style={{
                  margin: 0,
                  padding: '16px',
                  backgroundColor: '#0f172a',
                  color: '#38bdf8',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: 'ui-monospace, Consolas, Monaco, monospace',
                  overflowX: 'auto',
                  lineHeight: '1.5'
                }}
              >
                <code>{JSON.stringify(submittedData, null, 2)}</code>
              </pre>

              {/* Form Data Summary Table */}
              <div style={{ marginTop: '16px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#334155', fontSize: '14px' }}>
                  Parsed Summary:
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '10px'
                  }}
                >
                  <div style={{ padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>First Name</span>
                    <div style={{ fontWeight: '600', color: '#0f172a' }}>{submittedData.firstName}</div>
                  </div>
                  <div style={{ padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Last Name</span>
                    <div style={{ fontWeight: '600', color: '#0f172a' }}>{submittedData.lastName}</div>
                  </div>
                  <div style={{ padding: '10px 12px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Assigned Role</span>
                    <div style={{ fontWeight: '600', color: '#2563eb' }}>{submittedData.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: '30px 20px',
                textAlign: 'center',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '1px dashed #cbd5e1',
                color: '#94a3b8'
              }}
            >
              <p style={{ margin: 0, fontSize: '15px' }}>
                No submission data yet. Fill the required fields above and click <strong>Submit Form</strong>.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Assignment04;

