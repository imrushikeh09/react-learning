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

  // Keep both React state and localStorage in sync
  const handleTextChange = (newText) => {
    setTypedText(newText);
    localStorage.setItem('assignment2_text', newText);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header
        title="Assignment 2: Show My Name"
        subtitle="Dynamic state, props, and localStorage persistence"
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
        <InputBox value={typedText} onTextChange={handleTextChange} />
        <TextViewer text={typedText} />
      </main>
      <Footer />
    </div>
  );
}

export default AssignmentShowMyName;
