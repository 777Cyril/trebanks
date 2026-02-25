import styles from './Contact.module.css';

function openCalendly(e) {
  e.preventDefault();
  window.Calendly?.initPopupWidget({ url: 'https://calendly.com/trebanks' });
}

export default function Contact() {
  return (
    <div id="contact" className={styles.contactSection}>
      <div>
        <span className={styles.indexNumber}>03.</span>
        <p className={styles.contactText}>
          Operating at the intersection of cultural signaling and commercial strategy. Available for select high-impact consulting engagements, creative direction, and strategic partnerships.
        </p>
        <button onClick={openCalendly} className={styles.startProject}>
          <span className={styles.startProjectLabel}>Start a Project</span>
          <span className={styles.startProjectArrow}>→</span>
        </button>
      </div>
      <div className={styles.contactLinks}>
        <a href="mailto:trebanks.biz@gmail.com" className={styles.ctaButton}>
          Contact
          <span className={styles.ctaIcon}>→</span>
        </a>
        <a href="https://www.linkedin.com/in/lawrence-banks-iii/" target="_blank" rel="noopener noreferrer" className={`${styles.ctaButton} ${styles.ctaOutline}`}>
          LinkedIn
          <span className={`${styles.ctaIcon} ${styles.ctaIconDark}`}>→</span>
        </a>
      </div>
    </div>
  );
}
