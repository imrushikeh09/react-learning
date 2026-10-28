import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import InputBox from './InputBox';
import TextViewer from './TextViewer';

function AssignmentShowMyName() {
  // Read saved text from localStorage on first mount
  const [typedText, setTypedText] = useState(() => {
    return localStorage.getItem('assignment2_text') || '';
  });

  const [statusMessage, setStatusMessage] = useState(null);

  const handleTextChange = (newText) => {
    setTypedText(newText);
    if (statusMessage) setStatusMessage(null);
  };

  const handleSave = () => {
    localStorage.setItem('assignment2_text', typedText);
    setStatusMessage({
      type: 'success',
      text: '✓ Saved to local storage successfully!'
    });
    setTimeout(() => {
      setStatusMessage(null);
    }, 2500);
  };

  const handleClear = () => {
    setTypedText('');
    localStorage.removeItem('assignment2_text');
    setStatusMessage({
      type: 'info',
      text: 'Cleared input and local storage!'
    });
    setTimeout(() => {
      setStatusMessage(null);
    }, 2500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header
        title="Assignment 2: Show My Name"
        subtitle="Dynamic state, props, Save button, and localStorage persistence"
      />
      <main
        style={{
          flex: 1,
          padding: '40px 20px',
          maxWidth: '600px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'left'
        }}
      >
        <InputBox
          value={typedText}
          onTextChange={handleTextChange}
          onSave={handleSave}
          onClear={handleClear}
          statusMessage={statusMessage}
        />
        <TextViewer text={typedText} />
      </main>
      <Footer />
    </div>
  );
}

export default AssignmentShowMyName;
