import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function AssignmentStatic() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '100%' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default AssignmentStatic;
