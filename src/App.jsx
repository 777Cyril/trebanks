import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkList from './components/WorkList';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <div style={{ borderBottom: '1px solid var(--line-color)' }}>
        <Hero />
      </div>
      <WorkList />
      <Contact />
    </>
  );
}

export default App;
