function InputBox({ value, onTextChange }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        htmlFor="assignment-input"
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#ffffffff'
        }}
      >
        Input Box:
      </label>
      <input
        id="assignment-input"
        type="text"
        placeholder="Type something here..."
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 14px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #cbd5e1',
          outline: 'none',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
}

export default InputBox;
