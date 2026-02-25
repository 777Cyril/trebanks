import styles from './Contact.module.css';

function openCalendly(e) {
  e.preventDefault();
  window.Calendly?.initPopupWidget({ url: 'https://calendly.com/trebanks' });
}

export default function Contact() {
  return (
    <div id="contact" className={styles.contactSection}>
      <div>
        <span className={styles.indexNumber}>02.</span>
        <p className={styles.contactText}>
          Operating at the intersection of cultural signaling and commercial strategy. Available for select high-impact consulting engagements, creative direction, and strategic partnerships.
        </p>
      </div>
      <div className={styles.contactLinks}>
        <a href="mailto:tre@signal.com" className={styles.ctaButton}>
          Contact
          <span className={styles.ctaIcon}>→</span>
        </a>
        <button onClick={openCalendly} className={`${styles.ctaButton} ${styles.ctaOutline}`}>
          Schedule a Call
          <span className={`${styles.ctaIcon} ${styles.ctaIconDark}`}>→</span>
        </button>
        <a href="#" className={`${styles.ctaButton} ${styles.ctaOutline}`}>
          LinkedIn
          <span className={`${styles.ctaIcon} ${styles.ctaIconDark}`}>→</span>
        </a>
      </div>
    </div>
  );
}
