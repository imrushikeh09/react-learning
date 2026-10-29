function TextViewer({ text }) {
  return (
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
      }}
    >
      <h3 style={{ margin: '0 0 10px 0', color: '#1e293b', fontSize: '18px' }}>
        Output (TextViewer):
      </h3>
      <p
        style={{
          margin: 0,
          color: text ? '#0f172a' : '#94a3b8',
          fontSize: '18px',
          fontStyle: text ? 'normal' : 'italic',
          wordBreak: 'break-word',
          minHeight: '27px'
        }}
      >
        {text ? text : 'Nothing typed yet. Type in the box above!'}
      </p>
    </div>
  );
}

export default TextViewer;

