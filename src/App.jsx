import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputBox from './components/InputBox';
import TextViewer from './components/TextViewer';

function App() {
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
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '600px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <InputBox value={typedText} onTextChange={handleTextChange} />
        <TextViewer text={typedText} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

