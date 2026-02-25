import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkList from './components/WorkList';
import Archive from './components/Archive';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '44px', borderBottom: '1px solid var(--line-color)' }}>
        <Hero />
      </div>
      <WorkList />
      {/* <Archive /> */}
      <Contact />
    </>
  );
}

export default App;
