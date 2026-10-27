function InputBox({ value, onTextChange }) {
  const handleClear = () => {
    onTextChange('');
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        htmlFor="assignment-input"
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#1e293b'
        }}
      >
        Input Box:
      </label>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          id="assignment-input"
          type="text"
          placeholder="Type something here..."
          value={value}
          onChange={(e) => onTextChange(e.target.value)}
          style={{
            flex: 1,
            padding: '12px 14px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        <button
          type="button"
          onClick={handleClear}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#ef4444',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default InputBox;
