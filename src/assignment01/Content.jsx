function Content() {
  return (
    <main
      style={{
        padding: '40px 24px',
        backgroundColor: '#f1f5f9',
        color: '#334155',
        lineHeight: '1.6',
        maxWidth: '800px',
        margin: '30px auto',
        borderRadius: '10px',
        border: '1px solid #e2e8f0',
        textAlign: 'left'
      }}
    >
      <h2 style={{ color: '#1e293b', marginTop: 0, marginBottom: '14px', fontSize: '22px' }}>
        Main Content Section
      </h2>
      <p style={{ marginBottom: '12px', fontSize: '16px' }}>
        This is the Content component. In React, we break the user interface
        into independent, reusable components like this one.
      </p>
      <p style={{ margin: 0, fontSize: '16px' }}>
        Each component manages its own markup, styles, and logic.
      </p>
    </main>
  );
}

export default Content;

