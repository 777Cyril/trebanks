import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brandMark}>Signal / System</div>
      <nav>
        <a href="#work" className={styles.navLink}>Selected Works</a>
        <span className={styles.divider}>|</span>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}
