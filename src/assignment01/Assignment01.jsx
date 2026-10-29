import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Assignment01() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header
        title="Assignment 1: My React Application"
        subtitle="Header Component (Modular Component Architecture)"
      />
      <div style={{ flex: 1, padding: '0 20px' }}>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Assignment01;
