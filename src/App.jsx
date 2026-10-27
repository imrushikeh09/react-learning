import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputBox from './components/InputBox';
import TextViewer from './components/TextViewer';

function App() {
  const [typedText, setTypedText] = useState('');

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '600px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <InputBox value={typedText} onTextChange={setTypedText} />
        <TextViewer text={typedText} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

