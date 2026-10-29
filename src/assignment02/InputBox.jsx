function InputBox({ value, onTextChange, onSave, onClear, statusMessage }) {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else {
      onTextChange('');
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave();
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label
        htmlFor="assignment-input"
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#1e293b',
          fontSize: '15px'
        }}
      >
        Input Box:
      </label>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <input
          id="assignment-input"
          type="text"
          placeholder="Type something here..."
          value={value}
          onChange={(e) => onTextChange(e.target.value)}
          style={{
            flex: 1,
            minWidth: '220px',
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
          onClick={handleSave}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#10b981',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Save
        </button>
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
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Clear
        </button>
      </div>
      {statusMessage && (
        <div
          style={{
            marginTop: '8px',
            fontSize: '14px',
            color: statusMessage.type === 'error' ? '#ef4444' : '#10b981',
            fontWeight: '500'
          }}
        >
          {statusMessage.text}
        </div>
      )}
    </div>
  );
}

export default InputBox;

