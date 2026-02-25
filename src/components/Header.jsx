import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.right}>
          <a href="#work" className={styles.navLink}>Projects</a>
          <a href="#work" className={styles.navLink}>Archive</a>
          <a href="#contact" className={styles.navLink}>Info</a>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            Menu {menuOpen ? '×' : '='}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className={styles.menuOverlay} onClick={() => setMenuOpen(false)}>
          <nav className={styles.menuNav} onClick={e => e.stopPropagation()}>
            <a href="#work" className={styles.menuLink} onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#work" className={styles.menuLink} onClick={() => setMenuOpen(false)}>Archive</a>
            <a href="#contact" className={styles.menuLink} onClick={() => setMenuOpen(false)}>Info</a>
            <a href="#contact" className={styles.menuLink} onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </>
  );
}
